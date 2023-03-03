import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursesComponent } from './courses.component';
import { CoursesDetailsComponent } from './courses-details/courses-details.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
          path: '',
          component: CoursesComponent
      },
      {
          path: 'details',
          component: CoursesDetailsComponent
      }
  ]    
    // component: BlogsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseRoutingModule { }
