import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsComponent } from './blogs.component';
import { BlogsRoutingModule } from './blogs-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { BlogDetailsComponent } from './blog-details/blog-details.component';


@NgModule({
  declarations: [
    BlogsComponent,
    BlogDetailsComponent
  ],
  imports: [
    CommonModule,
    BlogsRoutingModule,
    SharedModule
  ]
})
export class BlogsModule { }
