import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AdminService } from '../../services/admin-service.service';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-admin-add-entity',
  templateUrl: './admin-add-entity.component.html',
  styleUrls: ['./admin-add-entity.component.css']
})
export class AdminAddEntityComponent implements OnInit, OnDestroy {

  entityForm!: FormGroup
  type: string[] = ['Buyer', 'Supplier']
  ifscRegex = "^[A-Z]{4}0[A-Z0-9]{6}$"
  acNoRegex = "^[0-9]{9,18}$"
  subscribe = new Subscription()

  constructor(
    private _fb: FormBuilder,
    private _service: AdminService,
    private _router: Router,
    private _toast: NgToastService
  ) { }

  ngOnInit(): void {
    this.entityForm = this._fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      type: ['', Validators.required],
      bankAccount: this._fb.array([
        this._fb.group({
          holderName: ['', Validators.required],
          bankName: ['', Validators.required],
          accountNumber: ['', [Validators.required, Validators.pattern(this.acNoRegex)]],
          ifsc: ['', [Validators.required, Validators.pattern(this.ifscRegex)]]
        })
      ])
    })
  }

  get bankAccount() {
    return this.entityForm.get('bankAccount') as FormArray
  }

  addBankAcc() {
    this.bankAccount.push(
      this._fb.group({
        holderName: ['', Validators.required],
        bankName: ['', Validators.required],
        accountNumber: ['', [Validators.required, Validators.pattern(this.acNoRegex)]],
        ifsc: ['', [Validators.required, Validators.pattern(this.ifscRegex)]]
      })
    )
  }

  deleteCol(i: number) {
    this.bankAccount.removeAt(i)
  }

  onSubmit() {
    if (this.entityForm.invalid) {
      return
    } else {
      let data = this.entityForm.getRawValue()
      this._service.addEntity(data).subscribe({
        next: () => {
          this._router.navigate(['/admin/entities'])
          this._toast.success({ detail: 'SUCCESS', summary: 'Entity created successfully.!', duration: 5000 })
        },
        error: (err) => {
          console.log(err.message);
        }
      })
    }
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe()
  }
}

