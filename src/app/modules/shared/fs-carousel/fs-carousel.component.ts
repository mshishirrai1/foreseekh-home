import { Component, Input } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';


@Component({
  selector: 'app-fs-carousel',
  templateUrl: './fs-carousel.component.html',
  styleUrls: ['./fs-carousel.component.scss']
})
export class FsCarouselComponent {

  @Input() sliderData = [
    {
      image: "/foreseekh-home/assets/images/products/product2.svg",
      enableAdditionalTextOnBanner:true,
      title: "",
      enableBannerClick: true,
      onBannerClickUrl: "/about-us",
      cursor: "pointer",
      showShadow:false,
    },
    {
      image: "/foreseekh-home/assets/images/products/product1.svg",
      enableAdditionalTextOnBanner:true,
      title: "",
      enableBannerClick: true,
      onBannerClickUrl: "/about-us",
      cursor: "pointer",
      showShadow:false,
    },
    // {
    //   image: "assets/images/homePageSlider/3.jpg",
    //   enableAdditionalTextOnBanner:true,
    //   title: "Test title",
    //   enableBannerClick: true,
    //   onBannerClickUrl: "/about-us",
    //   cursor: "pointer",
    // },
    // {
    //   image: "assets/images/homePageSlider/4.jpg",
    //   enableAdditionalTextOnBanner:true,
    //   title: "Test title",
    //   enableBannerClick: true,
    //   onBannerClickUrl: "/about-us",
    //   cursor: "pointer",
    // },
  ]

  constructor(config: NgbCarouselConfig, private router: Router) {
    config.interval = 2000000000;
    config.keyboard = true;
    config.pauseOnHover = true;
    config.showNavigationArrows = false;
  }

  onBannerClick(isEnabled: boolean, redirectUrl: string) {
    if (isEnabled) {
      this.router.navigate([redirectUrl]);
    }
  }

}
