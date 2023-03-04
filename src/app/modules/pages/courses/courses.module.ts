import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesComponent } from './courses.component';
import { CoursesDetailsComponent } from './courses-details/courses-details.component';
import { CourseRoutingModule } from './course-routing.module'
import { SharedModule } from '../../shared/shared.module';
import { CourseHeaderComponent } from './courses-details/course-header/course-header.component';
import { CourseCurriculumComponent } from './courses-details/course-curriculum/course-curriculum.component';
import { CourseInstructorComponent } from './courses-details/course-instructor/course-instructor.component';


@NgModule({
  declarations: [
    CoursesComponent,
    CoursesDetailsComponent,
    CourseHeaderComponent,
    CourseCurriculumComponent,
    CourseInstructorComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CourseRoutingModule
  ]
})
export class CoursesModule { }
