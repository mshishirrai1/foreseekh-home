import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesComponent } from './courses.component';
import { CoursesDetailsComponent } from './courses-details/courses-details.component';
import { CourseRoutingModule } from './course-routing.module'
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    CoursesComponent,
    CoursesDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CourseRoutingModule
  ]
})
export class CoursesModule { }
