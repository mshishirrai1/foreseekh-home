import { Component } from '@angular/core';

@Component({
  selector: 'app-follow-us',
  templateUrl: './follow-us.component.html',
  styleUrls: ['./follow-us.component.scss']
})
export class FollowUsComponent {
  pageData={
    title:"Follow us on:",
    iconList:[
      {
        path:"assets/images/footer/facebook.svg",
        url:"https://www.facebook.com/profile.php?id=100082986573710"
      },
      {
        path:"assets/images/footer/instagram.svg",
        url:"https://www.facebook.com/profile.php?id=100082986573710"
      },
      {
        path:"assets/images/footer/linkedin.svg",
        url:"https://www.linkedin.com/in/foreseekh-foreseekh-211927243"
      },
      {
        path:"assets/images/footer/twitter.svg",
        url:"https://www.linkedin.com/in/foreseekh-foreseekh-211927243"
      },
      {
        path:"assets/images/footer/youtube.svg",
        url:"https://www.linkedin.com/in/foreseekh-foreseekh-211927243"
      }
    ]
  }
}
