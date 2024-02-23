import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddQuotesComponent } from './admin-add-quotes.component';

describe('AdminAddQuotesComponent', () => {
  let component: AdminAddQuotesComponent;
  let fixture: ComponentFixture<AdminAddQuotesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAddQuotesComponent]
    });
    fixture = TestBed.createComponent(AdminAddQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
