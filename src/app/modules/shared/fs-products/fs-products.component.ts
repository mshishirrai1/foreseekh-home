import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fs-products',
  templateUrl: './fs-products.component.html',
  styleUrls: ['./fs-products.component.scss']
})
export class FsProductsComponent {
  @Input() textData = {
    title: "Our products",
    description: "",
    addUnderline: false,
    alignHeading: "center",//Center , left
    cursor:'pointer',//Cursor style
    boxData1:{
      title1:"Class ",
      title2:" 10",
      enableButton:true,
      redirectTo:'',
      description:"At Foreseekh, we understand the importance of quality education, especially during the crucial Class 10 academic year. Our mission is to provide students with the best online coaching experience, helping them excel in their studies and achieve their academic goals. "
    },
    boxData2:{
      title1:"NEET ",
      title2:"/ JEE",
      enableButton:true,
      redirectTo:'',
      description:"Welcome to Foreseekh, your ultimate destination for top-tier JEE (Joint Entrance Examination) and NEET (National Eligibility cum Entrance Test) online coaching. We understand the significance of these competitive exams in shaping your future, and we're here to empower you on your path to success. "
    },
    boxData3:{
      title1:"Class ",
      title2:" 12",
      enableButton:true,
      redirectTo:'',
      description:"Welcome to Foreseekh, your trusted partner in Class 12 education. As Class 12 is a critical juncture in every student's academic career, we are here to provide top-notch online coaching to help you succeed."
    }
  }
}
