import { Component, OnInit } from '@angular/core';
import { FetchService } from 'src/app/services/fetch.service';

@Component({
  selector: 'app-menu-info',
  templateUrl: './menu-info.component.html',
  styleUrls: ['./menu-info.component.scss']
})
export class MenuInfoComponent implements OnInit {

  constructor(private fetchservice:FetchService) { }
  // '../../../assets/data/entradas.json'
  entradas:any
  ngOnInit(): void {
    this.fetchservice.fetchData('../../../assets/data/entradas.json')
    .subscribe((response)=>{
      console.log(response);
      this.entradas=response;
      
    })
  }

}
