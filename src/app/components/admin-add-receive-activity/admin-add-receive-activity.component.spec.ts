import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddReceiveActivityComponent } from './admin-add-receive-activity.component';

describe('AdminAddReceiveActivityComponent', () => {
  let component: AdminAddReceiveActivityComponent;
  let fixture: ComponentFixture<AdminAddReceiveActivityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAddReceiveActivityComponent]
    });
    fixture = TestBed.createComponent(AdminAddReceiveActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
