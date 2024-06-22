import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/pages/home/home.module').then( m => m.HomeModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./modules/pages/about-us/about-us.module').then( m => m.AboutUsModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./modules/pages/contact-us/contact-us.module').then( m => m.ContactUsModule)
  },
  {
    path: 'blogs',
    loadChildren: () => import('./modules/pages/blogs/blogs.module').then( m => m.BlogsModule)
  },
  {
    path: 'courses',
    loadChildren: () => import('./modules/pages/courses/courses.module').then( m => m.CoursesModule)
  },
  {
    path: 'faq',
    loadComponent: () => import('./modules/pages/faq-page/faq-page.component').then( m => m.FaqPageComponent)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
