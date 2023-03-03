import { Component } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent {
  textBlogData = {
    title: "Foreseekh Blog  ",
    description: `<p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
     velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
     sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`,
    showButton: false,
    buttonUrl: '',
    buttonName: "",
    addUnderline: true,
    alignHeading: "left",//Center , left
    alignContent: "left",//Center , left
    alignButton: ""//start,end,center
  }

  blogList = {
    title: "",
    description: "",
    addUnderline: false,
    alignHeading: "left",//Center , left
    cursor:'pointer',//Cursor style
    datePosition:"top",//top,bottom
    numberOfItemsPerPage:8,
    showDescription:false,
    showTitle:false,
    thumbnailData:[
      {
        image:"https://fastly.picsum.photos/id/994/536/354.jpg?hmac=2vh9aMw_mfyFM5-wVaqCiL59AEOtwCMCpr6ZLjr_IT4",
        title:"Test title Test title Test titlevTest title Test title Test title",
        description:"Test description",
        url:'blogs/lessons',
        author:"test author",
        date:"22 Mar, 2023, 7p.m"
      },
      {
        image:"https://fastly.picsum.photos/id/994/536/354.jpg?hmac=2vh9aMw_mfyFM5-wVaqCiL59AEOtwCMCpr6ZLjr_IT4",
        title:"Test title",
        description:"Test description",
        url:'blogs/lessons',
        author:"test author",
        date:"22 Mar, 2023, 7p.m"
      },
      {
        image:"https://fastly.picsum.photos/id/994/536/354.jpg?hmac=2vh9aMw_mfyFM5-wVaqCiL59AEOtwCMCpr6ZLjr_IT4",
        title:"Test title",
        description:"Test description",
        url:'blogs/lessons',
        author:"test author",
        date:"22 Mar, 2023, 7p.m"
      },
      {
        image:"https://fastly.picsum.photos/id/994/536/354.jpg?hmac=2vh9aMw_mfyFM5-wVaqCiL59AEOtwCMCpr6ZLjr_IT4",
        title:"Test title",
        description:"Test description",
        url:'blogs/lessons',
        author:"test author",
        date:"22 Mar, 2023, 7p.m"
      },
      {
        image:"https://fastly.picsum.photos/id/994/536/354.jpg?hmac=2vh9aMw_mfyFM5-wVaqCiL59AEOtwCMCpr6ZLjr_IT4",
        title:"Test title",
        description:"Test description",
         url:'blogs/lessons',
        author:"test author",
        date:"22 Mar, 2023, 7p.m"
      },
      {
        image:"https://fastly.picsum.photos/id/994/536/354.jpg?hmac=2vh9aMw_mfyFM5-wVaqCiL59AEOtwCMCpr6ZLjr_IT4",
        title:"Test title",
        description:"Test description",
         url:'blogs/lessons',
        author:"test author",
        date:"22 Mar, 2023, 7p.m"
      },
      {
        image:"https://fastly.picsum.photos/id/994/536/354.jpg?hmac=2vh9aMw_mfyFM5-wVaqCiL59AEOtwCMCpr6ZLjr_IT4",
        title:"Test title",
        description:"Test description",
         url:'blogs/lessons',
        author:"test author",
        date:"22 Mar, 2023, 7p.m"
      },
      {
        image:"https://fastly.picsum.photos/id/994/536/354.jpg?hmac=2vh9aMw_mfyFM5-wVaqCiL59AEOtwCMCpr6ZLjr_IT4",
        title:"Test title",
        description:"Test description",
         url:'blogs/lessons',
        author:"test author",
        date:"22 Mar, 2023, 7p.m"
      },
      {
        image:"https://fastly.picsum.photos/id/994/536/354.jpg?hmac=2vh9aMw_mfyFM5-wVaqCiL59AEOtwCMCpr6ZLjr_IT4",
        title:"Test title",
        description:"Test description",
         url:'blogs/lessons',
        author:"test author",
        date:"22 Mar, 2023, 7p.m"
      },
      {
        image:"https://fastly.picsum.photos/id/994/536/354.jpg?hmac=2vh9aMw_mfyFM5-wVaqCiL59AEOtwCMCpr6ZLjr_IT4",
        title:"Test title",
        description:"Test description",
         url:'blogs/lessons',
        author:"test author",
        date:"22 Mar, 2023, 7p.m"
      },
      {
        image:"https://fastly.picsum.photos/id/994/536/354.jpg?hmac=2vh9aMw_mfyFM5-wVaqCiL59AEOtwCMCpr6ZLjr_IT4",
        title:"Test title",
        description:"Test description",
         url:'blogs/lessons',
        author:"test author",
        date:"22 Mar, 2023, 7p.m"
      },
      {
        image:"https://fastly.picsum.photos/id/994/536/354.jpg?hmac=2vh9aMw_mfyFM5-wVaqCiL59AEOtwCMCpr6ZLjr_IT4",
        title:"Test title",
        description:"Test description",
         url:'blogs/lessons',
        author:"test author",
        date:"22 Mar, 2023, 7p.m"
      }
    ]
  }
}
