import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-title-icon-text',
  templateUrl: './title-icon-text.component.html',
  styleUrls: ['./title-icon-text.component.scss']
})
export class TitleIconTextComponent {
  @Input() pageData={
    iconPath:"assets/images/contactus/faq.png",
    title:"Need help?",
    description:"Explore our FAQs",
  }

  constructor(private router: Router){}

  redirectTopage(data:any){
    if(data.url){
      this.router.navigate([data.url]);

    }
  }
}
