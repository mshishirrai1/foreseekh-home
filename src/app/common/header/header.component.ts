import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  menuItems =[
    {
      name:'Home',
      url:'/'
    },
    {
      name:'About Us',
      url:'about-us'
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
