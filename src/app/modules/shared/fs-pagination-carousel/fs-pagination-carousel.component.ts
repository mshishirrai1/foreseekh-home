import { Component, Input,ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-fs-pagination-carousel',
  templateUrl: './fs-pagination-carousel.component.html',
  styleUrls: ['./fs-pagination-carousel.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class FsPaginationCarouselComponent {
  pageDataOnset : any
  @Input() set pageData(data:any)  {
    console.log(data.thumbnailData.length)
    if(data.thumbnailData.length){
      this.pageDataOnset = data
      this.setChunkArray()
    }

  }

  sliderData :any= []

  constructor(config: NgbCarouselConfig, private router: Router,
  private cdr: ChangeDetectorRef) {
    config.interval = 6000000;
    config.keyboard = true;
    config.pauseOnHover = true;
    config.showNavigationArrows = false;
  }

  ngOnInit(){
    // this.setChunkArray()
  }

  setChunkArray(){
    while (this.pageDataOnset.thumbnailData.length) {
      this.sliderData.push(this.pageDataOnset.thumbnailData.splice(0, this.pageDataOnset.numberOfItemsPerPage));
    }
    // this.cdr.detectChanges()
  }

  onCardClick(url:string){
    if(url.includes('youtube')){
      window.open(url, '_blank')
    }else{
      this.router.navigate([url]);
    }
  }
}
