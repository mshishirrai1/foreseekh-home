import { Component, Input, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-text-thumbnail-slider',
  templateUrl: './text-thumbnail-slider.component.html',
  styleUrls: ['./text-thumbnail-slider.component.scss']
})
export class TextThumbnailSliderComponent implements OnInit {
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

  sliderData :any= []

  constructor(config: NgbCarouselConfig) {
    config.interval = 6000;
    config.keyboard = true;
    config.pauseOnHover = true;
    config.showNavigationArrows = false;
  }

  ngOnInit(){
    this.setChunkArray()
  }

  setChunkArray(){
    while (this.textData.thumbnailData.length) {
      this.sliderData.push(this.textData.thumbnailData.splice(0, 4));
    }
  }
}
