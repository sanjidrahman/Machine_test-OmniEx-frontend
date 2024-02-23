import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AdminService } from '../../services/admin-service.service';
import { NgToastService } from 'ng-angular-popup';
import { Subscription } from 'rxjs';
import { IReceiveRecordModel } from '../../interfaces/app.interfaces';
import { NgConfirmService } from 'ng-confirm-box';

@Component({
  selector: 'app-admin-receive-activity',
  templateUrl: './admin-receive-activity.component.html',
  styleUrls: ['./admin-receive-activity.component.css']
})
export class AdminReceiveActivityComponent implements OnDestroy {
  displayedColumns: string[] = ['position', 'buyer', 'supplier', 'quantity', 'rate', 'date', 'amount', 'action'];
  dataSource = new MatTableDataSource<IReceiveRecordModel>([]);
  subscribe = new Subscription()
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private _service: AdminService,
    private _toast: NgToastService,
    private _ngConfirm: NgConfirmService,
  ) { }

  ngAfterViewInit() {
    this.subscribe.add(
      this._service.getAllQuoteRecord().subscribe({
        next: (res) => {
          this.dataSource.data = res.receiveRecords
        },
        error: (err) => {
          this._toast.error({ detail: 'ERROR', summary: err.error.message, duration: 5000 })
        }
      })
    )
    this.dataSource.paginator = this.paginator;
  }

  onDelete(id: string) {
    this._ngConfirm.showConfirm('Are you sure you want to procees ?', () => {
      this._service.deleteQuoteRecord(id).subscribe({
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

  onEdit(id: string) {

  }

  onView(id: string) {

  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe()
  }

}

