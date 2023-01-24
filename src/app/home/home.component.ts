import { Component } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  itemsData: any;
  responsiveOptions:any;
  
  constructor(private http:HttpService){
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }
  ngOnInit(){
    this.getGoodsData();
  }

  getGoodsData(){
    this.http.getItemDetails().subscribe(data=>{
      this.itemsData=data;
      console.log('home componnet data',this.itemsData)
  
})
  }
  }