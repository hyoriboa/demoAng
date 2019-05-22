import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap2ListComponent } from './baitap2-list.component';

describe('Baitap2ListComponent', () => {
  let component: Baitap2ListComponent;
  let fixture: ComponentFixture<Baitap2ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap2ListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap2ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
