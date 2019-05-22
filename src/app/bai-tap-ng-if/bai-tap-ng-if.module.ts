import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaiTapNgIfComponent } from './bai-tap-ng-if.component';

@NgModule({
  declarations: [BaiTapNgIfComponent],
  exports: [BaiTapNgIfComponent],
  imports: [
    CommonModule
  ]
})
export class BaiTapNgIfModule { }
