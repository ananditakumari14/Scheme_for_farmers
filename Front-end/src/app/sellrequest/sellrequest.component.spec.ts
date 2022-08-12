import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellrequestComponent } from './sellrequest.component';

describe('SellrequestComponent', () => {
  let component: SellrequestComponent;
  let fixture: ComponentFixture<SellrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellrequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
