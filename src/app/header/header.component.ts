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
  homeFlag: boolean=false;
  fashionFalg: boolean=false;
  electronicsFlag: boolean=false;
  jewelleryFlag: boolean=false;
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
navTabClicked(data:string){
  if(data==='home'){
  this.homeFlag=true;
  this.fashionFalg=false;
  this.electronicsFlag=false;
  this.jewelleryFlag=false;
  }
  else if(data==='fashion'){
    this.homeFlag=false;
    this.fashionFalg=true;
    this.electronicsFlag=false;
    this.jewelleryFlag=false;
    }
    else if(data==='jewellery'){
      this.homeFlag=false;
      this.fashionFalg=false;
      this.electronicsFlag=false;
      this.jewelleryFlag=true;
      }
      else if(data==='electronics'){
        this.homeFlag=false;
        this.fashionFalg=false;
        this.electronicsFlag=true;
        this.jewelleryFlag=false;
        }
}
}
