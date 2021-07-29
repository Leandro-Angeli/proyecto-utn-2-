import { Component, OnInit } from '@angular/core';
import { FetchService } from 'src/app/services/fetch.service';
// Import Swiper and modules
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper/core';

import { SwiperModule } from 'swiper/angular';



// Install modules
SwiperCore.use([Navigation, Pagination, Scrollbar]);
@Component({
  selector: 'app-staff-main',
  templateUrl: './staff-main.component.html',
  styleUrls: ['./staff-main.component.scss']
})
export class StaffMainComponent implements OnInit {

  constructor(private fetchservice:FetchService) { }
  staff:any


   swiperConfig = {
    slidesPerView: 4,
    pagination:true,
    scrollbar: true,
    navigation:true,
   
    
    loop:true,
    breakpoints:{
     
   }
  } 

  
  ngOnInit(): void {
   
    

   

  

    this.fetchservice.fetchData('https://jsonplaceholder.typicode.com/users')
  .subscribe((response)=>{
    console.log(response);
    this.staff=response;

  })

 
 
 

  
  }


}
