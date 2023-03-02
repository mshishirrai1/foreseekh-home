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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
