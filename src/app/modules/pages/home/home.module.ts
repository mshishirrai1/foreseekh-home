import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module'
import { SharedModule } from '../../shared/shared.module';
import { HighlightSectionComponent } from './highlight-section/highlight-section.component'

@NgModule({
  declarations: [
    HomeComponent,
    HighlightSectionComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
