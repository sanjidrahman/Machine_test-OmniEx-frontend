import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminQuoteLedgerComponent } from './admin-quote-ledger.component';

describe('AdminQuoteLedgerComponent', () => {
  let component: AdminQuoteLedgerComponent;
  let fixture: ComponentFixture<AdminQuoteLedgerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminQuoteLedgerComponent]
    });
    fixture = TestBed.createComponent(AdminQuoteLedgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
