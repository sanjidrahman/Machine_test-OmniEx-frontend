import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AdminService } from '../../services/admin-service.service';
import { Subscription } from 'rxjs';
import { IReportModel } from '../../interfaces/app.interfaces';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-admin-report',
  templateUrl: './admin-report.component.html',
  styleUrls: ['./admin-report.component.css']
})
export class AdminReportComponent implements OnDestroy {

  displayedColumns: string[] = ['position', 'supplier', 'buyer', 'avg', 'due', 'action'];
  dataSource = new MatTableDataSource<IReportModel>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  subscription = new Subscription()

  constructor(
    private _service: AdminService,
    private _datepipe: DatePipe,
  ) { }

  ngAfterViewInit() {
    this.subscription.add(
      this._service.getReports().subscribe({
        next: (res) => {
          this.dataSource.data = res.report
        },
        error: (err) => {
          console.log(err);
        }
      })
    )
    this.dataSource.paginator = this.paginator;
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return
    } else {
      const selectedDate = form.value.selectedDate
      this.subscription.add(
        this._service.getReports(selectedDate.toISOString()).subscribe({ // instead of selectedDate.toISOString changed to format
          next: (res) => {
            this.dataSource.data = res.report
          },
          error: (err) => {
            console.log(err);
          }
        })
      )
    }
    this.dataSource.paginator = this.paginator;
  }

  onDelete(id: string) {

  }

  // onView(id: string) {

  // }

  onEdit(id: string) {

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}


