import { Component } from '@angular/core';

@Component({
  selector: 'app-courses-details',
  templateUrl: './courses-details.component.html',
  styleUrls: ['./courses-details.component.scss']
})
export class CoursesDetailsComponent {
  sliderData = [
    {
      image: "/assets/images/homePageSlider/1.jpg",
      enableAdditionalTextOnBanner:true,
      title: "Test title",
      enableBannerClick: true,
      onBannerClickUrl: "/about-us",
      cursor: "pointer",
      showShadow:true,
    },
    {
      image: "/assets/images/homePageSlider/2.jpg",
      enableAdditionalTextOnBanner:true,
      title: "Test title",
      enableBannerClick: true,
      onBannerClickUrl: "/about-us",
      cursor: "pointer",
      showShadow:true,

    }
  ]

  course={
    title:"Vedic Mathemetics",
    description:`Start your path to a career in project management. In this program, you’ll
    learn in-demand skills that will have you job-ready in less than six months.
    No degree or experience is required. `,
    instructor:"Punith Kumar Shetty",
    price:12000,
    language:"Ënglish",
    url:"www.google.com"
  }

  aboutCourse={
    title: "About Vedic Mathemetics ",
    description: `<p class="mt-4"> ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
    velit esse cillum dolore eu fugiat nulla pariatLorem ipsum dolor sit amet, consectetur adipiscing elit, sed
     do eiusmod tempor incididunt
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

  curriculumData={
    title:"This course includes ",
    curriculumList:[
      {
        unitName:"Test Unit - 1",
        chapters:[
          {
            name:"Test chapter"
          }, {
            name:"Test chapter"
          },
          {
            name:"Test chapter"
          }, {
            name:"Test chapter"
          },
          {
            name:"Test chapter"
          }, {
            name:"Test chapter"
          },
          {
            name:"Test chapter"
          }, {
            name:"Test chapter"
          }
        ]
      },
      {
        unitName:"Test Unit - 1",
        chapters:[
          {
            name:"Test chapter"
          }
        ]
      },
      {
        unitName:"Test Unit - 1",
        chapters:[
          {
            name:"Test chapter"
          }
        ]
      },
      {
        unitName:"Test Unit - 1",
        chapters:[
          {
            name:"Test chapter"
          }
        ]
      },
      {
        unitName:"Test Unit - 1",
        chapters:[
          {
            name:"Test chapter"
          }
        ]
      },
      {
        unitName:"Test Unit - 1",
        chapters:[
          {
            name:"Test chapter"
          }
        ]
      },
      {
        unitName:"Test Unit - 1",
        chapters:[
          {
            name:"Test chapter"
          }
        ]
      }
    ]
  }


  courseContentData = [
    {
      name:"Total Live Sessions",
      value :"30"
    },
    {
      name:"Downloadable Resources",
      value :"10"
    },
    {
      name:"Certificate on Completion",
      value :"Yes"
    },
    {
      name:"Doubt clearing sessions",
      value :"Yes"
    }
  ]

  instructorData = {
   title:"About instructor",
   name:"Punith Kumar Shetty",
   desc1:"HOD Maths Department",
   desc2:"Presidency school Mangalore",
   courses:'14',
   learners:"1200",
   imagePath:"/assets/images/instructors/punith.png",
   description:`Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
   Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
   Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
   Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
   Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
   Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
   Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum `,
   fbUrl:'',
   instaUrl:'',
   linkedinUrl:'',
   twitterUrl:'',
   youtubeUrl:'',
}
}
