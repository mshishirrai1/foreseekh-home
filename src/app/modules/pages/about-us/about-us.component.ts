import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
  aboutData = {
    title: "Welcome To Foreseekh",
    description: `ForeSeekh is a one-stop platform for all your learning choices. We have experts who are passionate about teaching. 
    Our courses are curated by experts and taught by enthusiastic tutors, making learning a better experience.
    ForeSeekh is a one-stop platform for all your learning choices. We have experts who are passionate about teaching. 
    Our courses are curated by experts and taught by enthusiastic tutors, making learning a better experience
    ForeSeekh is a one-stop platform for all your learning choices. We have experts who are passionate about teaching. 
    Our courses are curated by experts and taught by enthusiastic tutors, making learning a better experience
    ForeSeekh is a one-stop platform for all your learning choices. We have experts who are passionate about teaching. 
    Our courses are curated by experts and taught by enthusiastic tutors, making learning a better experience`,
    addUnderline: true,
    alignHeading: "left",//Center , left
    // alignContent: "left",//Center , left
    imagePath:"assets/images/homeImages/2sec.png",
    imageFloat:"right",//left,right,none
    imageHeight : '20rem',
    imageWidth: '35.625rem'
  }

  knowMore = {
    title: "Know More ",
    description: `Foreseekh is not just about connecting with other professionals or seeking new knowledge and opportunities. 
    It is about meeting people who believe in you, who care about your success, and who want you to achieve your goals.
    Foreseekh is not just about connecting with other professionals or seeking new knowledge and opportunities. 
    It is about meeting people who believe in you, who care about your success, and who want you to achieve your goals
    Foreseekh is not just about connecting with other professionals or seeking new knowledge and opportunities. 
    It is about meeting people who believe in you, who care about your success, and who want you to achieve your goals
    Foreseekh is not just about connecting with other professionals or seeking new knowledge and opportunities. 
    It is about meeting people who believe in you, who care about your success, and who want you to achieve your goals
    Foreseekh is not just about connecting with other professionals or seeking new knowledge and opportunities. 
    It is about meeting people who believe in you, who care about your success, and who want you to achieve your goals`,
    showButton: false,
    buttonUrl: '',
    buttonName: "",
    addUnderline: true,
    alignHeading: "left",//Center , left
    alignContent: "left",//Center , left
    alignButton: "center"//start,end,center
  }

  visionData = {
    title: "Our vision ",
    description: `We are a team of educators with a vision and passion for Teaching. We have started this 
    venture to make the best quality education accessible to all - not just in the developed world, but also in the developing world. That is our mission.<br>
    ForeSeekh is a One stop educational platform, created with the mission to provide a wealth of high quality educational content for everyone from any location.`,
    showButton: false,
    buttonUrl: '',
    buttonName: "",
    addUnderline: true,
    alignHeading: "left",//Center , left
    alignContent: "left",//Center , left
    alignButton: "center"//start,end,center
  }

  missionData = {
    title: "Our mission ",
    description: `We want to be more than just a learning platform, we want to be the platform for lifelong learning..`,
    showButton: false,
    buttonUrl: '',
    buttonName: "",
    addUnderline: false,
    alignHeading: "left",//Center , left
    alignContent: "left",//Center , left
    alignButton: "center"//start,end,center
  }

  ideologyData = {
    title: "Our ideology ",
    description: `Our custom designed live classroom sessions are focusing on learning with practical application and through 
    understanding . The courses are taught in a way so that conceptual learning is given importance rather than just learning . 
    Conceptual learning has an important role in helping a learner to understand how to apply the concepts in problem solving.`,
    showButton: false,
    buttonUrl: '',
    buttonName: "",
    addUnderline: true,
    alignHeading: "left",//Center , left
    alignContent: "left",//Center , left
    alignButton: "center"//start,end,center
  }
  constructor() {

  }
}
