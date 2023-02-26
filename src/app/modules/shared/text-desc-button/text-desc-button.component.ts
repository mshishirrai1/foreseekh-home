import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-desc-button',
  templateUrl: './text-desc-button.component.html',
  styleUrls: ['./text-desc-button.component.scss']
})
export class TextDescButtonComponent {

  @Input() textData = {
    title: "TIME TO LEARN  ",
    description: `<br>Learn on the go to excel in life <br> or just to keep you happy, it's all here.<br> <br>
    Handpicked courses by subject matter experts from different domains.<br><br> LEARNING WAS NEVER THIS EASY.`,
    showButton: true,
    buttonUrl: 'adsdsfsfsa',
    buttonName: "Enroll Now",
    addUnderline: true,
    alignHeading: "center",//Center , left
    alignContent: "center",//Center , left
    alignButton: "center"//start,end,center
  }

  onButtonClick() {

  }

}
