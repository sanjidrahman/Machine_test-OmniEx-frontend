import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../services/admin-service.service';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';
import { IEntityModel } from '../../interfaces/app.interfaces';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-add-send-activity',
  templateUrl: './admin-add-send-activity.component.html',
  styleUrls: ['./admin-add-send-activity.component.css']
})
export class AdminAddSendActivityComponent implements OnInit, OnDestroy {

  sendRecord!: FormGroup
  buyer: IEntityModel[] = []
  supplier: IEntityModel[] = []
  subscribe = new Subscription()
  // picker: 

  constructor(
    private _fb: FormBuilder,
    private _service: AdminService,
    private _toast: NgToastService,
    private _router: Router,
  ) { }

  ngOnInit(): void {
    this.sendRecord = this._fb.group({
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

        }
      })
    )
  }


  onSubmit() {
    if (this.sendRecord.invalid) {
      return
    } else {
      const data = this.sendRecord.getRawValue()
      this.subscribe.add(
        this._service.addSendRecord(data).subscribe({
          next: () => {
            this._router.navigate(['admin/send-list'])
            this._toast.success({ detail: 'SUCCESS', summary: 'New Record created successfully.!', duration: 5000 })
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
