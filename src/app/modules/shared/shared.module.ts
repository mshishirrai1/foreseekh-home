import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TextDescButtonComponent } from './text-desc-button/text-desc-button.component';
import { TextDescImageComponent } from './text-desc-image/text-desc-image.component';
import { TextThumbnailSliderComponent } from './text-thumbnail-slider/text-thumbnail-slider.component';
import { FsCarouselComponent } from './fs-carousel/fs-carousel.component';
import { FsProductsComponent } from './fs-products/fs-products.component';
import { FsPaginationCarouselComponent } from './fs-pagination-carousel/fs-pagination-carousel.component';
import { TitleIconTextComponent } from './title-icon-text/title-icon-text.component';
import { FollowUsComponent } from './follow-us/follow-us.component';
import { FaqComponent } from './faq/faq.component';



@NgModule({
  declarations: [
    TextDescButtonComponent,
    TextDescImageComponent,
    TextThumbnailSliderComponent,
    FsCarouselComponent,
    FsProductsComponent,
    FsPaginationCarouselComponent,
    TitleIconTextComponent,
    FollowUsComponent,
    FaqComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports:[
    TextDescButtonComponent,
    TextDescImageComponent,
    TextThumbnailSliderComponent,
    FsCarouselComponent,
    FsProductsComponent,
    FsPaginationCarouselComponent,
    TitleIconTextComponent,
    FollowUsComponent,
    FaqComponent
  ]
})
export class SharedModule { }
