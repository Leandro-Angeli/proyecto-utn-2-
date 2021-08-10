import { Component, OnInit } from '@angular/core';
import { FetchService } from 'src/app/services/fetch.service';
@Component({
  selector: 'app-locales',
  templateUrl: './locales.component.html',
  styleUrls: ['./locales.component.scss']
})
export class LocalesComponent implements OnInit {

  constructor(private fetchservice:FetchService) { }
  locales:any;
  ngOnInit(): void {
    this.fetchservice.fetchData('../../../assets/data/sucursales.json')
    .subscribe((response)=>{
     
      this.locales=response;
      
    })

  }

}
