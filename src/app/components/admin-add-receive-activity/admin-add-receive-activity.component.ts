import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IEntityModel } from '../../interfaces/app.interfaces';
import { Subscription } from 'rxjs';
import { AdminService } from '../../services/admin-service.service';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-add-receive-activity',
  templateUrl: './admin-add-receive-activity.component.html',
  styleUrls: ['./admin-add-receive-activity.component.css']
})
export class AdminAddReceiveActivityComponent {

  receiveRecord!: FormGroup
  buyer: IEntityModel[] = []
  supplier: IEntityModel[] = []
  subscribe = new Subscription()

  constructor(
    private _fb: FormBuilder,
    private _service: AdminService,
    private _toast: NgToastService,
    private _router: Router,
  ) { }

  ngOnInit(): void {
    this.receiveRecord = this._fb.group({
      buyer: ['', Validators.required],
      supplier: ['', Validators.required],
      quantity: ['', Validators.required],
      rate: ['', Validators.required],
      date: ['', Validators.required],
      amount: ['', Validators.required],
      time: ['', Validators.required],
    })

    this.subscribe.add(
      this._service.getAllEntity().subscribe({
        next: (res) => {
          this.buyer = res.allEntities.filter(data => data.type == 'Buyer')
          this.supplier = res.allEntities.filter(data => data.type == 'Supplier')
        },
        error: (err) => {
          this._toast.error({ detail: 'ERROR', summary: err.error.message, duration: 5000 })
        }
      })
    )
  }


  onSubmit() {
    if (this.receiveRecord.invalid) {
      return
    } else {
      const data = this.receiveRecord.getRawValue()
      this.subscribe.add(
        this._service.addQuoteRecord(data).subscribe({
          next: () => {
            this._router.navigate(['/admin/receive-list'])
            // this._toast.success({ detail: 'SUCCESS', summary: 'Record Added Successfully..!', duration: 5000 })
          },
          error: (err) => {
            this._toast.error({ detail: 'ERROR', summary: err.error.message, duration: 5000 })
          }
        })
      )
    }
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe()
  }

}
