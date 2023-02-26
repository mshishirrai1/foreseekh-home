import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-desc-image',
  templateUrl: './text-desc-image.component.html',
  styleUrls: ['./text-desc-image.component.scss']
})
export class TextDescImageComponent {
  @Input() textData = {
    title: "UPSKILL YOURSELF IN EVERYWAY FROM ANYWHERE",
    description: `Learn the whole or a bit of what interests you from a varied discipline in the 
    comfort of your house. ForeSeekh is a hub for learning the skills you want and need, whether 
    you're just starting or a seasoned pro.<br><br> Maybe you want to get a better job or pursue an interest
     that has been on your mind for a long time.<br><br> To know more about our courses curated by experts 
     and delivered by teachers from all over the world`,
    addUnderline: true,
    alignHeading: "left",//Center , left
    // alignContent: "left",//Center , left
    imagePath:"assets/images/homeImages/2sec.png",
    imageFloat:"right",//left,right,none
    imageHeight : '20rem',
    imageWidth: '35.625rem'
  }
}
