import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BaiTap1Component } from './bai-tap1/bai-tap1.component';
import { Baitap1HeaderComponent } from './bai-tap1/baitap1-header/baitap1-header.component';
import { Baitap1FooterComponent } from './bai-tap1/baitap1-footer/baitap1-footer.component';
import { Baitap1ContentComponent } from './bai-tap1/baitap1-content/baitap1-content.component';
import { Baitap1SidebarComponent } from './bai-tap1/baitap1-sidebar/baitap1-sidebar.component';
import { Baitap2Component } from './baitap2/baitap2.component';
import { Baitap2HeaderComponent } from './baitap2/baitap2-header/baitap2-header.component';
import { Baitap2SlideComponent } from './baitap2/baitap2-slide/baitap2-slide.component';
import { Baitap2ContentComponent } from './baitap2/baitap2-content/baitap2-content.component';
import { Baitap2ListComponent } from './baitap2/baitap2-list/baitap2-list.component';
import { Baitap2FooterComponent } from './baitap2/baitap2-footer/baitap2-footer.component';
import { WhatComponent } from './baitap2/baitap2-content/what/what.component';
import { ContactComponent } from './baitap2/baitap2-content/contact/contact.component';
import { Baitap2CardComponent } from './baitap2/baitap2-list/baitap2-card/baitap2-card.component';

import {Baitap3Module} from './baitap3/baitap3.module';
import {DataBindingModule} from './data-binding/data-binding.module';
import {StructuralDirectiveModule} from './structural-directive/structural-directive.module';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import {AttributeDirectiveModule} from './attribute-directive/attribute-directive.module';
import {BaiTapNgIfModule} from './bai-tap-ng-if/bai-tap-ng-if.module';
import { NgContentModule } from './ng-content/ng-content.module';
import { NgContentComponent } from './ng-content/ng-content.component';
import { InteractionModule } from './interaction/interaction.module';
import { DatVeBusModule } from './dat-ve-bus/dat-ve-bus.module';

@NgModule({
  declarations: [
    //khai báo component vs app.module
    AppComponent,
    BaiTap1Component,
    Baitap1HeaderComponent,
    Baitap1FooterComponent,
    Baitap1ContentComponent,
    Baitap1SidebarComponent,
    Baitap2Component,
    Baitap2HeaderComponent,
    Baitap2SlideComponent,
    Baitap2ContentComponent,
    Baitap2ListComponent,
    Baitap2FooterComponent,
    WhatComponent,
    ContactComponent,
    Baitap2CardComponent,
    NgSwitchComponent,
    
  ],
  imports: [
    //import thư viện và các module khác
    BrowserModule,
    Baitap3Module,
    DataBindingModule,
    StructuralDirectiveModule,
    AttributeDirectiveModule,
    BaiTapNgIfModule,
    NgContentModule,
    InteractionModule,
    DatVeBusModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
