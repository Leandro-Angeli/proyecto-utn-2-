import { AfterViewInit } from '@angular/core';
import { Component } from '@angular/core';


// import Swiper core and required modules
// Import Swiper and modules
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper/core';
import { SwiperModule } from 'swiper/angular';

// Install modules
SwiperCore.use([Navigation, Pagination, Scrollbar]);

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  onSwiper(swiper:any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }


  //Swiper Config options
  swiperConfig = {
    loop:true,
   
  breakpoints: {
    1024: {
      slidesPerView: 3,
    },
    500: {
      slidesPerView: 3,
    },
    400: {
      slidesPerView: 2,
    },
    300: {
      slidesPerView: 1,
    },
  },
  
};


}

