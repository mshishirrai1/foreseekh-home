import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TextDescButtonComponent } from './text-desc-button/text-desc-button.component';
import { TextDescImageComponent } from './text-desc-image/text-desc-image.component';
import { TextThumbnailSliderComponent } from './text-thumbnail-slider/text-thumbnail-slider.component';
import { FsCarouselComponent } from './fs-carousel/fs-carousel.component';



@NgModule({
  declarations: [
    TextDescButtonComponent,
    TextDescImageComponent,
    TextThumbnailSliderComponent,
    FsCarouselComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports:[
    TextDescButtonComponent,
    TextDescImageComponent,
    TextThumbnailSliderComponent,
    FsCarouselComponent
  ]
})
export class SharedModule { }
