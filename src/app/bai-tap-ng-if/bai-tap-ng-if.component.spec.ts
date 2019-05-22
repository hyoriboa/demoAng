import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTapNgIfComponent } from './bai-tap-ng-if.component';

describe('BaiTapNgIfComponent', () => {
  let component: BaiTapNgIfComponent;
  let fixture: ComponentFixture<BaiTapNgIfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaiTapNgIfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiTapNgIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
