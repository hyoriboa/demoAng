import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap2SlideComponent } from './baitap2-slide.component';

describe('Baitap2SlideComponent', () => {
  let component: Baitap2SlideComponent;
  let fixture: ComponentFixture<Baitap2SlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap2SlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap2SlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
