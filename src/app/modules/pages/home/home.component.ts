import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  contactRedirectData = {
    title: "WOULD LIKE TO KNOW MORE ABOUT US?",
    description: `<br>.`,
    showButton: true,
    buttonUrl: '/contact-us',
    buttonName: "Click Here",
    addUnderline: false,
    alignHeading: "center",//Center , left
    alignContent: "center",//Center , left
    alignButton: "center"//start,end,center
  } 

  trendingCourses = {
    title: "Trending courses",
    description: "",
    addUnderline: true,
    alignHeading: "left",//Center , left
    cursor:'pointer',//Cursor style
    thumbnailData:[
      // {
      //   image:"https://fastly.picsum.photos/id/994/536/354.jpg?hmac=2vh9aMw_mfyFM5-wVaqCiL59AEOtwCMCpr6ZLjr_IT4",
      //   title:"Test title Test title Test titlevTest title Test title Test title",
      //   description:"Test description",
      //   url:'testurl',
      //   author:"test author",
      //   date:"22 Mar, 2023, 7p.m"
      // },
      {
        image:"https://fastly.picsum.photos/id/994/536/354.jpg?hmac=2vh9aMw_mfyFM5-wVaqCiL59AEOtwCMCpr6ZLjr_IT4",
        title:"Test title",
        description:"Test description",
        url:'testurl',
        author:"test author",
        date:"22 Mar, 2023, 7p.m"
      },
      {
        image:"https://fastly.picsum.photos/id/994/536/354.jpg?hmac=2vh9aMw_mfyFM5-wVaqCiL59AEOtwCMCpr6ZLjr_IT4",
        title:"Test title",
        description:"Test description",
        url:'testurl',
        author:"test author",
        date:"22 Mar, 2023, 7p.m"
      },
      {
        image:"https://fastly.picsum.photos/id/994/536/354.jpg?hmac=2vh9aMw_mfyFM5-wVaqCiL59AEOtwCMCpr6ZLjr_IT4",
        title:"Test title",
        description:"Test description",
        url:'testurl',
        author:"test author",
        date:"22 Mar, 2023, 7p.m"
      },
      {
        image:"https://fastly.picsum.photos/id/994/536/354.jpg?hmac=2vh9aMw_mfyFM5-wVaqCiL59AEOtwCMCpr6ZLjr_IT4",
        title:"Test title",
        description:"Test description",
        url:'testurl',
        author:"test author",
        date:"22 Mar, 2023, 7p.m"
      }
    ]
  }

  faqData = {
    title:"Explore our faq",
    faqList:[
      {
        question:"Test question?",
        answer:"Test answer",
      },
      {
        question:"Test question?",
        answer:"Test answer",
      },
      {
        question:"Test question?",
        answer:"Test answer",
      }
    ]
  }

  constructor(){
  }
}
