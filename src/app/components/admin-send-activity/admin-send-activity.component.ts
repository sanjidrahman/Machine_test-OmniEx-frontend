import { Component, OnDestroy, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { AdminService } from '../../services/admin-service.service';
import { NgToastService } from 'ng-angular-popup';
import { ISendRecordModel } from '../../interfaces/app.interfaces';
import { NgConfirmService } from 'ng-confirm-box';

@Component({
  selector: 'app-admin-purchase',
  templateUrl: './admin-send-activity.component.html',
  styleUrls: ['./admin-send-activity.component.css']
})
export class AdminSendActivityComponent implements OnDestroy {

  displayedColumns: string[] = ['position', 'buyer', 'supplier', 'date', 'amount', 'action'];
  dataSource = new MatTableDataSource<ISendRecordModel>([]);
  subscription = new Subscription()
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private _service: AdminService,
    private _toast: NgToastService,
    private _ngConfirm: NgConfirmService,
  ){}

  ngAfterViewInit() {
    this.subscription.add(
      this._service.getAllSendRecords().subscribe({
        next: (res) => {
          this.dataSource.data = res.sendRecords
        },
        error: (err) => {
          this._toast.error({ detail: 'ERROR', summary: err.error.message, duration: 5000 })
        }
      })
    )
    this.dataSource.paginator = this.paginator;
  }

  onEdit(id: string) {

  }

  onDelete(id: string) {
    this._ngConfirm.showConfirm('Are you sure you want to procees ?', () => {
      this._service.deleteSendRecord(id).subscribe({
        next: () => {
          this._toast.success({ detail: 'SUCCESS', summary: 'Entity deleted successfully.!', duration: 5000 })
        },
        error: (err) => {
          this._toast.success({ detail: 'ERROR', summary: err.error.message, duration: 5000 })
        }
      })
    }, () => {
      this._ngConfirm.closeConfirm()
    })
  }

  onView(id: string) {
    
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
