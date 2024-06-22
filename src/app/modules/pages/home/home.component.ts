import { Component } from '@angular/core';

import { ApiHandlerService } from '../../../services/core/api-handler.service'

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

  trendingCourses:any = {
    title: "Latest videos",
    description: "",
    addUnderline: true,
    alignHeading: "left",//Center , left
    cursor:'pointer',//Cursor style
    thumbnailData:[]
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

  constructor(private apiHandlerService:ApiHandlerService){
    this.getYouTubeData()
  }

  getYouTubeData(){
    this.apiHandlerService.getDataFromYoutube(4).subscribe({
      next: (response) => {
        response.items.forEach((data:any) => {
          let obj={
            image: data.snippet.thumbnails.high.url,
            title: data.snippet.title,
            description:data.snippet.description,
            url:'https://www.youtube.com/watch?v='+data.id.videoId,
            author: data.snippet.channelTitle,
            date:new Date(data.snippet.publishedAt).toLocaleDateString("en-US",
              { year: 'numeric', month: 'long', day: 'numeric' }) ,
          }
          this.trendingCourses.thumbnailData.push(obj)
        });

      },

      })
  }
}
