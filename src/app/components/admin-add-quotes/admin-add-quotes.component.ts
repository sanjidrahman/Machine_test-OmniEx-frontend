import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IEntityModel } from '../../interfaces/app.interfaces';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AdminService } from '../../services/admin-service.service';

@Component({
  selector: 'app-admin-add-quotes',
  templateUrl: './admin-add-quotes.component.html',
  styleUrls: ['./admin-add-quotes.component.css']
})
export class AdminAddQuotesComponent {

  quoteRecord!: FormGroup
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
    this.quoteRecord = this._fb.group({
      buyer: ['', Validators.required],
      supplier: ['', Validators.required],
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
    if (this.quoteRecord.invalid) {
      return
    } else {
      const data = this.quoteRecord.getRawValue()
      this.subscribe.add(
        this._service.addStockRecord(data).subscribe({
          next: () => {
            this._router.navigate(['/admin/quotes'])
            this._toast.success({ detail: 'SUCCESS', summary: 'Record Added Successfully..!', duration: 5000 })
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
