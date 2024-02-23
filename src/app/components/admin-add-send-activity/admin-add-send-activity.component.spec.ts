import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddSendActivityComponent } from './admin-add-send-activity.component';

describe('AdminAddSendActivityComponent', () => {
  let component: AdminAddSendActivityComponent;
  let fixture: ComponentFixture<AdminAddSendActivityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAddSendActivityComponent]
    });
    fixture = TestBed.createComponent(AdminAddSendActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
