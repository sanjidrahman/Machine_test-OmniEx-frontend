import { Component, OnDestroy, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NgToastService } from 'ng-angular-popup';
import { Subscription } from 'rxjs';
import { IQuoteRecordModel } from '../../interfaces/app.interfaces';
import { AdminService } from '../../services/admin-service.service';
import { NgConfirmService } from 'ng-confirm-box';

@Component({
  selector: 'app-admin-quote-ledger',
  templateUrl: './admin-quote-ledger.component.html',
  styleUrls: ['./admin-quote-ledger.component.css']
})
export class AdminQuoteLedgerComponent implements OnDestroy {

  displayedColumns: string[] = ['position', 'buyer', 'supplier', 'date', 'amount', 'action'];
  dataSource = new MatTableDataSource<IQuoteRecordModel>([]);
  subscription = new Subscription()
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private _service: AdminService,
    private _toast: NgToastService,
    private _ngConfirm: NgConfirmService,
  ) { }

  ngAfterViewInit() {
    this.subscription.add(
      this._service.getAllStockRecord().subscribe({
        next: (res) => {
          this.dataSource.data = res.stockRecords
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
      this._service.deleteStockeRecord(id).subscribe({
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
    this.subscription.unsubscribe()
  }

}
