import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructuralDirectiveComponent } from './structural-directive.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgforComponent } from './ngfor/ngfor.component';

@NgModule({
  declarations: [StructuralDirectiveComponent, NgifComponent, NgforComponent],
  exports: [StructuralDirectiveComponent, NgifComponent, NgforComponent],
  imports: [
    CommonModule
  ]
})
export class StructuralDirectiveModule { }
