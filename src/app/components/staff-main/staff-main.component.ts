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
   
    pagination:true,
    scrollbar: true,
    navigation:true,
    autoplay: {delay: 5000,},
    
    loop:true,
    breakpoints:{
     0:{slidesPerView: 1

      },
      480:{slidesPerView: 2,

      },
      650:{slidesPerView: 3,
      
      },
      1200:{  slidesPerView: 4,

       }
     
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
