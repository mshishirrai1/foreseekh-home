import { Component, Input } from '@angular/core';

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
}
