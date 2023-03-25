import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-highlight-section',
  templateUrl: './highlight-section.component.html',
  styleUrls: ['./highlight-section.component.scss']
})
export class HighlightSectionComponent {

  @Input() textData = {
    title: "Time to learn  ",
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
