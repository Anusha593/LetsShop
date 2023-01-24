import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
public product:any=[];
public grandTotal:number=0;
constructor(private cart :CartService){

}
ngOnInit(){
  this.cart.getProducts().subscribe((data:any)=>{
this.product=data;
this.grandTotal=this.cart.getTotalItemPrice();
  })
}
removeItem(data:any){
  this.cart.removeCartItem(data)

}
removeAllItem(){
  this.cart.removeAllcart();
}

}
