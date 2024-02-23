import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminReceiveActivityComponent } from './admin-receive-activity.component';

describe('AdminReceiveActivityComponent', () => {
  let component: AdminReceiveActivityComponent;
  let fixture: ComponentFixture<AdminReceiveActivityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminReceiveActivityComponent]
    });
    fixture = TestBed.createComponent(AdminReceiveActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
