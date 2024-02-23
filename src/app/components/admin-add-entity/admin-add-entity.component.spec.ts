import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddEntityComponent } from './admin-add-entity.component';

describe('AdminAddEntityComponent', () => {
  let component: AdminAddEntityComponent;
  let fixture: ComponentFixture<AdminAddEntityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAddEntityComponent]
    });
    fixture = TestBed.createComponent(AdminAddEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
