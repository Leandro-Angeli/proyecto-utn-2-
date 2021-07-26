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
  template: `
    <swiper
    [slidesPerView]="3"
    [spaceBetween]="50"
    (swiper)="onSwiper($event)"
    (slideChange)="onSlideChange()"
      
    >
      <ng-template swiperSlide>Slide 1</ng-template>
      <ng-template swiperSlide>Slide 2</ng-template>
      <ng-template swiperSlide>Slide 3</ng-template>
    </swiper>
  `,
})
export class SliderComponent {
  onSwiper(swiper:any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }
}

