import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceappformComponent } from './insuranceappform.component';

describe('InsuranceappformComponent', () => {
  let component: InsuranceappformComponent;
  let fixture: ComponentFixture<InsuranceappformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsuranceappformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceappformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
