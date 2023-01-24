import { ChangeDetectorRef, Component } from '@angular/core';
import { CartService } from '../cart.service';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.scss']
})
export class ElectronicsComponent {
  itemsData:any=[{}];
  message: any;
  newArr:any
  productData: any;
  searchText: any;
    constructor(private cart:CartService,private http:HttpService,private _detector: ChangeDetectorRef
      ){
           
    }
ngOnInit(){
  this.getGoodsData();
this.getSearchText();
}
addToCart(data:any,id:string){
console.log(data);
this.cart.addToCart(data,id);
}
getGoodsData(){
  this.http.getItemDetails().subscribe(data=>{
    this.itemsData=data;
    this.itemsData.forEach((a:any) => {
      Object.assign(a,{quantity:1,total:a.price})
    });
    this.newArr=   this.itemsData.filter((x:any)=>
    x.category.includes('electronics'));

  });
  }
  getSearchText() {
    this.http.getSearchText().subscribe(data=>{
   this.searchText=data;
   console.log('in fashion',this.searchText)
 
 })
   }
 
}
