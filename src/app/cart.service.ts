import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  public cartItemList: any = [];
  public productList = new BehaviorSubject<any>([]);
  constructor() { }
  getProducts() {
    return this.productList.asObservable();
  }
  setProduct(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addToCart(product: any, id: string) {

    const productExistInCart = this.cartItemList.find(({ id }: any) => id === product.id); // find product by id
    if (!productExistInCart) {
      this.cartItemList.push({ ...product, quantity: 1 }); // enhance "porduct" opject with "quantity" property
      console.log('return if not exist', this.cartItemList)
      this.productList.next(this.cartItemList);

      return;
    }
    productExistInCart.quantity += 1;
    this.productList.next(this.cartItemList);
    console.log('print the data', this.cartItemList)

  }
  getTotalItemPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += a.total
    })
    return grandTotal;
  }
  removeCartItem(product: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartItemList.splice(index, 1);
      }
    })
    this.productList.next(this.cartItemList)
  }

  removeAllcart() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }

}
