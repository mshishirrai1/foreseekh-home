import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  footerMenuItems =[
    {
      name:'Home',
      url:'/'
    },
    {
      name:'About Us',
      url:'/'
    },
    {
      name:'Courses',
      url:'/'
    },
    {
      name:'Blog',
      url:'/'
    },
    {
      name:'Contact Us',
      url:'/'
    }
  ]
}
