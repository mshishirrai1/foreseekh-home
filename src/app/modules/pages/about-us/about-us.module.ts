import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsComponent } from './about-us.component';
import { AboutUsRoutingModule } from './about-us-routing.module'
import { SharedModule } from '../../shared/shared.module';
import { OurTeamComponent } from './our-team/our-team.component'


@NgModule({
  declarations: [
    AboutUsComponent,
    OurTeamComponent
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    SharedModule
  ]
})
export class AboutUsModule { }
