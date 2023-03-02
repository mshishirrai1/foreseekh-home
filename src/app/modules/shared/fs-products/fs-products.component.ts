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
      title1:"Test ",
      title2:" title",
      enableButton:true,
      redirectTo:'',
      description:"Test description Test description Test description Test description Test description Test description Test description Test description Test description Test description Test description Test description Test description "
    },
    boxData2:{
      title1:"Test ",
      title2:" title",
      enableButton:true,
      redirectTo:'',
      description:"Test description Test description Test description Test description Test description Test description Test description Test description Test description Test description Test description Test description Test description "
    },
    boxData3:{
      title1:"Test ",
      title2:" title",
      enableButton:true,
      redirectTo:'',
      description:"Test description Test description Test description Test description Test description Test description Test description Test description Test description Test description Test description Test description Test description "
    }
  }
}
