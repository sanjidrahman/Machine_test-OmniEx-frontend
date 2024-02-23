import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSendActivityComponent } from './admin-send-activity.component';

describe('AdminPurchaseComponent', () => {
  let component: AdminSendActivityComponent;
  let fixture: ComponentFixture<AdminSendActivityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminSendActivityComponent]
    });
    fixture = TestBed.createComponent(AdminSendActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
