import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent {
 selectedBlog :any

  blogList = [
      {
        title:"JEE and CET: A Guide to Understanding Entrance Exams in India",
        description:`In India, gaining admission to prestigious engineering colleges and institutions often hinges on two primary entrance exams: the Joint Entrance Examination (JEE) and Common Entrance Test (CET). These exams serve as crucial gateways for aspiring engineers and are pivotal in shaping their academic and professional futures. Let’s delve deeper into what these exams entail, their significance,
        and how they impact students aiming to pursue engineering careers
        <p>The JEE is arguably one of the most renowned and competitive entrance exams
        in India. It is conducted by the National Testing Agency (NTA) and serves as
        the gateway to admission into the prestigious Indian Institutes of
        Technology (IITs), National Institutes of Technology (NITs), Indian Institutes of
        Information Technology (IIITs), and other premier engineering institutions across
        the country.</p>

        <p>Both JEE and CET play pivotal roles in shaping the careers of aspiring engineers in India. While JEE opens doors to prestigious national institutions like IITs and NITs, CET provides access to engineering colleges within specific states or groups of states. Understanding the nuances and preparation strategies for these exams is crucial for students aiming to excel and secure admissions in their desired engineering programs. Whether aspiring for national or state-level institutions, diligent preparation and a clear understanding of exam patterns and syllabi are key to success in JEE and CET.</p>`,
        url:'jee-cet',
        addUnderline: false,
        alignHeading: "left",//Center , left
        // alignContent: "left",//Center , left
        imagePath:"/foreseekh-home/assets/images/blog/JEE.jpg",
        imageFloat:"left",//left,right,none
        imageHeight : '40%',
        imageWidth: '50%'
      },
      {
        title:"The Power of Logarithms: Unlocking the Magic of Mathematical Scaling",
        description:`Logarithms, often abbreviated as logs, are a fundamental concept in mathematics that have profound implications across various fields, from engineering and physics to finance and computer science. Despite their abstract nature, logarithms play a crucial role in simplifying calculations, understanding exponential growth and decay, and solving complex equations. In this blog, we'll explore the power of logarithms, their properties, applications, and why they are indispensable in both theoretical and practical realms.
        <p>Logarithms are essentially the inverse operation of exponentiation. If exponentiation involves raising a base number to a certain power to obtain a result, logarithms help determine the exponent when given the base and the result.</p>
        <p>Logarithms, with their ability to bridge exponential relationships and simplify complex calculations, underpin much of modern mathematical and scientific inquiry. They empower engineers, scientists, economists, and analysts to model natural phenomena, optimize algorithms, and understand intricate systems with greater precision. Whether elucidating the growth of bacteria or enhancing the efficiency of algorithms, the power of logarithms remains a cornerstone of mathematical thought and practical application, illustrating how a seemingly abstract concept shapes our understanding of the world.</p>`,
        url:'logarithms',
        addUnderline: false,
        alignHeading: "left",//Center , left
        // alignContent: "left",//Center , left
        imagePath:"/foreseekh-home/assets/images/blog/log.png",
        imageFloat:"left",//left,right,none
        imageHeight : '40%',
        imageWidth: '50%'
      }
    ]

    constructor(private router: Router,
      private activatedRoute: ActivatedRoute
    ){
      this.getBlogData(activatedRoute?.snapshot?.routeConfig?.path)
    }

    getBlogData(url:any){
      this.selectedBlog = this.blogList.filter(item => item.url === url)[0];
    }
}
