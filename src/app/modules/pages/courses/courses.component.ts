import { Component  } from '@angular/core';

import { ApiHandlerService } from 'src/app/services/core/api-handler.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent  {
  courseData = {
    title: "Foreseekh Courses ",
    description: `<p class="mt-4"> Welcome to our Course Video Page, your gateway to dynamic and comprehensive learning resources designed to enhance your educational journey. Here, you'll find a curated collection of video lectures, tutorials, and demonstrations meticulously crafted to supplement your learning experience and deepen your understanding of various subjects</p>`,
    showButton: false,
    buttonUrl: '',
    buttonName: "",
    addUnderline: true,
    alignHeading: "left",//Center , left
    alignContent: "left",//Center , left
    alignButton: ""//start,end,center
  }

  courseList:any = {
    title: "",
    description: "",
    addUnderline: false,
    alignHeading: "left",//Center , left
    cursor:'pointer',//Cursor style
    datePosition:"top",//top,bottom
    numberOfItemsPerPage:6,
    showDescription:false,
    showTitle:false,
    thumbnailData:[]
  }


  constructor(private apiHandlerService:ApiHandlerService
  ){
    this.getYouTubeData()

  }

  getYouTubeData(){
    this.apiHandlerService.getDataFromYoutube(200).subscribe({
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
          this.courseList.thumbnailData.push(obj)
        });
        this.courseList = {...this.courseList}
      },
      })
  }
}
