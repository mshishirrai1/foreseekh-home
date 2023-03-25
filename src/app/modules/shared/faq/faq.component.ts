import { Component, Input } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent {
  @Input() faqData:any;
  activeFaq = -1;

  toggleFaq(index:number){
    if(index == this.activeFaq){
      this.activeFaq = -1;
    }else{
      this.activeFaq = index;
    }
  }
}
