import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-fs-pagination-carousel',
  templateUrl: './fs-pagination-carousel.component.html',
  styleUrls: ['./fs-pagination-carousel.component.scss']
})
export class FsPaginationCarouselComponent {
  @Input() pageData = {
    title: "Explore our courses",
    description: "",
    addUnderline: true,
    alignHeading: "left",//Center , left
    cursor:'pointer',//Cursor style
    datePosition:"top",//top,bottom
    numberOfItemsPerPage:4,
    showTitle:true,
    showDescription:true,
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

  constructor(config: NgbCarouselConfig, private router: Router) {
    config.interval = 6000000;
    config.keyboard = true;
    config.pauseOnHover = true;
    config.showNavigationArrows = false;
  }

  ngOnInit(){
    this.setChunkArray()
  }

  setChunkArray(){
    while (this.pageData.thumbnailData.length) {
      this.sliderData.push(this.pageData.thumbnailData.splice(0, this.pageData.numberOfItemsPerPage));
    }
  }

  onCardClick(url:string){
    this.router.navigate([url]);
  }
}
