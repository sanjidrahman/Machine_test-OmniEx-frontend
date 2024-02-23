import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AdminService } from '../../services/admin-service.service';
import { IEntityModel } from '../../interfaces/app.interfaces';
import { NgConfirmService } from 'ng-confirm-box';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-admin-entities',
  templateUrl: './admin-entities.component.html',
  styleUrls: ['./admin-entities.component.css']
})
export class AdminEntitiesComponent {

  displayedColumns: string[] = ['position', 'name', 'type', 'banks', 'action'];
  dataSource = new MatTableDataSource<IEntityModel>([]);

  constructor(
    private _service: AdminService,
    private _ngConfirm: NgConfirmService,
    private _toast: NgToastService,
  ){}

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this._service.getAllEntity().subscribe({
      next: (res) => {
        this.dataSource.data = res.allEntities
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  onDelete(id: string) {
    this._ngConfirm.showConfirm('Are you sure you want to procees ?', () => {
      this._service.deleteEntity(id).subscribe({
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

}
