import { Component, Input } from '@angular/core';
import { CartService } from '../cart.service';
import { HttpService } from '../http.service';
import {Router} from '@angular/router';
import { faShoppingBag} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
public isCollapsed:boolean=true;
  count: number=0;
  totalItemLength: any;
  searchText:any;
faShoppingBag=faShoppingBag;
constructor(private cart:CartService,private http:HttpService,private router:Router){}
ngOnInit(){
 this.cart.getProducts().subscribe((data:any)=>{
  console.log('print add to cart data',data)
  this.totalItemLength=data.length;
  
 })
}
sendText(searchText:any){
  this.http.sendSearchText(searchText);
  console.log('in header',searchText)
}
getGoods(data:string){
  console.log('is data coming',data)
  //this.http.sendMessages(data); 
    this.router.navigateByUrl('/products');
}
}
