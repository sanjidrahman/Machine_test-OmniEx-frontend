import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminNavigationComponent } from './components/admin-navigation/admin-navigation.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminEntitiesComponent } from './components/admin-entities/admin-entities.component';
import { AdminAddEntityComponent } from './components/admin-add-entity/admin-add-entity.component';
import { AdminSendActivityComponent } from './components/admin-send-activity/admin-send-activity.component';
import { AdminAddReceiveActivityComponent } from './components/admin-add-receive-activity/admin-add-receive-activity.component';
import { AdminAddSendActivityComponent } from './components/admin-add-send-activity/admin-add-send-activity.component';
import { AdminReceiveActivityComponent } from './components/admin-receive-activity/admin-receive-activity.component';
import { AdminQuoteLedgerComponent } from './components/admin-quote-ledger/admin-quote-ledger.component';
import { AdminAddQuotesComponent } from './components/admin-add-quotes/admin-add-quotes.component';
import { AdminReportComponent } from './components/admin-report/admin-report.component';

const routes: Routes = [
  { path: '', redirectTo: 'admin/dashboard', pathMatch: 'full' },
  {
    path: 'admin', title: 'Admin Nav', component: AdminNavigationComponent, children: [
      { path: 'dashboard', title: 'Admin Dashboard', component: AdminDashboardComponent },
      { path: 'entities', title: 'Admin Entities', component: AdminEntitiesComponent },
      { path: 'add-entity', title: 'Admin Add Entity', component: AdminAddEntityComponent },
      { path: 'send-list', title: 'Admin Send Activity', component: AdminSendActivityComponent },
      { path: 'receive-list', title: 'Admin Receive Activity', component: AdminReceiveActivityComponent },
      { path: 'quotes', title: 'Admin Quote Ledger Activity', component: AdminQuoteLedgerComponent },
      { path: 'add-quotes', title: 'Admin Add Quotes', component: AdminAddQuotesComponent },
      { path: 'receive-record', title: 'Add Receive Record', component: AdminAddReceiveActivityComponent },
      { path: 'send-record', title: 'Add Send Record', component: AdminAddSendActivityComponent },
      { path: 'report', title: 'Admin Report', component: AdminReportComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
