import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogsComponent } from './blogs.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
          path: '',
          component: BlogsComponent
      },
      {
          path: 'jee-cet',
          component: BlogDetailsComponent
      },
      {
        path: 'logarithms',
        component: BlogDetailsComponent
    }
  ]
    // component: BlogsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogsRoutingModule { }
