import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminNavigationComponent } from './components/admin-navigation/admin-navigation.component';
import { AdminEntitiesComponent } from './components/admin-entities/admin-entities.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { AdminAddEntityComponent } from './components/admin-add-entity/admin-add-entity.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminService } from './services/admin-service.service';
import { HttpClientModule } from '@angular/common/http';
import { NgToastModule } from 'ng-angular-popup';
import { NgConfirmModule } from 'ng-confirm-box';
import { AdminSendActivityComponent } from './components/admin-send-activity/admin-send-activity.component';
import { AdminAddSendActivityComponent } from './components/admin-add-send-activity/admin-add-send-activity.component';
import { AdminAddReceiveActivityComponent } from './components/admin-add-receive-activity/admin-add-receive-activity.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { AdminReceiveActivityComponent } from './components/admin-receive-activity/admin-receive-activity.component';
import { AdminQuoteLedgerComponent } from './components/admin-quote-ledger/admin-quote-ledger.component';
import { AdminAddQuotesComponent } from './components/admin-add-quotes/admin-add-quotes.component'
import { MatNativeDateModule } from '@angular/material/core';
import { AdminReportComponent } from './components/admin-report/admin-report.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AdminNavigationComponent,
    AdminEntitiesComponent,
    AdminDashboardComponent,
    AdminAddEntityComponent,
    AdminSendActivityComponent,
    AdminAddSendActivityComponent,
    AdminAddReceiveActivityComponent,
    AdminReceiveActivityComponent,
    AdminQuoteLedgerComponent,
    AdminAddQuotesComponent,
    AdminReportComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatPaginatorModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTabsModule,
    MatExpansionModule,
    HttpClientModule,
    NgToastModule,
    NgConfirmModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMaterialTimepickerModule.setOpts('ar-AE', 'arab'),
  ],
  providers: [
    AdminService,
    DatePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
