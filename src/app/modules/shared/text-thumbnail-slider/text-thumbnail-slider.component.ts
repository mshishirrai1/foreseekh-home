import { Component, Input, OnInit, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import KeenSlider, { KeenSliderInstance } from "keen-slider"
// import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
// import KeenSlider from 'keen-slider'
// import "keen-slider/dist/keen-slider.min.css"

@Component({
  selector: 'app-text-thumbnail-slider',
  templateUrl: './text-thumbnail-slider.component.html',
  styleUrls: ['./text-thumbnail-slider.component.scss', '../../../../../node_modules/keen-slider/keen-slider.min.css']
})
export class TextThumbnailSliderComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() textData = {
    title: "Explore our courses",
    description: "",
    addUnderline: true,
    alignHeading: "left",//Center , left
    cursor:'pointer',//Cursor style
    thumbnailData:[
      {
        image:"https://fastly.picsum.photos/id/994/536/354.jpg?hmac=2vh9aMw_mfyFM5-wVaqCiL59AEOtwCMCpr6ZLjr_IT4",
        title:"Test title Test title Test titlevTest title Test title Test title",
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
  @ViewChild("sliderRef") sliderRef: ElementRef<HTMLElement>

  slider: KeenSliderInstance
  sliderData :any= []

  constructor() {
  }

  ngOnInit(){
    // this.setChunkArray()
  }

  ngAfterViewInit() {
    let perview = 4
    if(window.innerWidth <= 480){
      perview=1
    }else if(window.innerWidth > 480 && window.innerWidth <= 730){
      perview=2
    }else if(window.innerWidth > 730 && window.innerWidth <= 980){
      perview=3
    }else{
      perview=4
    }
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      loop: true,
      rtl: true,
      slides: {
        perView: perview,
        spacing: 25,
      },
    })
  }

  // setChunkArray(){
  //   while (this.textData.thumbnailData.length) {
  //     this.sliderData.push(this.textData.thumbnailData.splice(0, 4));
  //   }
    // const lastDataLength = this.sliderData[this.sliderData.length-1].length;
    // if(this.sliderData.length > 1 && lastDataLength !== 4){
    //   const items = [...this.sliderData[0].slice(0, 4 - lastDataLength)]
    //   this.addItemsToArray(items)
    // }
  // }

  // addItemsToArray(data:any){
  //   this.sliderData[this.sliderData.length-1].concat(...data)
  // }

  redirectTo(url:string){
    window.open(url,'_blank')
  }
  ngOnDestroy() {
    if (this.slider) this.slider.destroy()
  }
}
