import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { IEntityResModel, IQuoteRecordResModel, IReceiveRecordResModel, IReportModel, IReportResModel, ISendRecordResModel } from '../interfaces/app.interfaces';
import { Observable } from 'rxjs';

@Injectable()
export class AdminService {

  commonUrl = environment.API_URL

  constructor(
    private _http: HttpClient,
  ) { }

  getAllEntity(): Observable<IEntityResModel> {
    return this._http.get<IEntityResModel>(`${this.commonUrl}/admin/entity`)
  }
  addEntity(data: any) {
    return this._http.post(`${this.commonUrl}/admin/entity`, data)
  }
  deleteEntity(id: string) {
    return this._http.delete(`${this.commonUrl}/admin/entity/${id}`,)
  }


  addSendRecord(data: any) {
    return this._http.post(`${this.commonUrl}/admin/sendrecord`, data)
  }
  getAllSendRecords(): Observable<ISendRecordResModel> {
    return this._http.get<ISendRecordResModel>(`${this.commonUrl}/admin/sendrecord`)
  }
  deleteSendRecord(id: string) {
    return this._http.delete(`${this.commonUrl}/admin/sendrecord/${id}`,)
  }


  addQuoteRecord(data: any) {
    return this._http.post(`${this.commonUrl}/admin/quoterecord`, data)
  }
  getAllQuoteRecord(): Observable<IReceiveRecordResModel> {
    return this._http.get<IReceiveRecordResModel>(`${this.commonUrl}/admin/quoterecord`)
  }
  deleteQuoteRecord(id: string) {
    return this._http.delete(`${this.commonUrl}/admin/quoterecord/${id}`,)
  }


  addStockRecord(data: any) {
    return this._http.post(`${this.commonUrl}/admin/stock`, data)
  }
  getAllStockRecord(): Observable<IQuoteRecordResModel> {
    return this._http.get<IQuoteRecordResModel>(`${this.commonUrl}/admin/stock`)
  }
  deleteStockeRecord(id: string) {
    return this._http.delete(`${this.commonUrl}/admin/stock/${id}`,)
  }

  getReports(date: string): Observable<IReportResModel> {
    return this._http.post<IReportResModel>(`${this.commonUrl}/admin/report`, { date })
  }

}  
