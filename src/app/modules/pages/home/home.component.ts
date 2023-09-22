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
    title: "Latest videos",
    description: "",
    addUnderline: true,
    alignHeading: "left",//Center , left
    cursor:'pointer',//Cursor style
    thumbnailData:[
      {
        image:"https://img.youtube.com/vi/uDnskkCRwsk/hqdefault.jpg",
        title:"Vedic mathematics",
        description:"Vedic Maths: Ancient wisdom, modern efficiency for rapid mental calculations.",
        url:'https://youtu.be/uDnskkCRwsk',
        author:"Punith Kumar Shetty",
        date:"22 Mar, 2023, 7p.m"
      },
      {
        image:"https://img.youtube.com/vi/GeLI7Qwkpc4/hqdefault.jpg",
        title:"Trignometry",
        description:"Trigonometry: Unlocking angles, triangles, and waves in mathematics and physics.",
        url:'https://youtu.be/GeLI7Qwkpc4',
        author:"Punith Kumar Shetty",
        date:"22 Mar, 2023, 7p.m"
      },
      {
        image:"https://img.youtube.com/vi/cUS1-CZr0r4/hqdefault.jpg",
        title:"Integration",
        description:"Integration: Uniting and finding the area under curves in calculus.",
        url:'https://youtu.be/cUS1-CZr0r4',
        author:"Punith Kumar Shetty",
        date:"22 Mar, 2023, 7p.m"
      },
      {
        image:"https://img.youtube.com/vi/vDXeAGdjSFc/hqdefault.jpg",
        title:"JEE Preparation",
        description:"Complex Numbers: Imaginary and real parts combine for powerful mathematical tools.",
        url:'https://youtu.be/vDXeAGdjSFc',
        author:"Punith Kumar Shetty",
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
