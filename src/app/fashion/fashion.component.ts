import { ChangeDetectorRef, Component } from '@angular/core';
import { Router, NavigationExtras, NavigationStart } from '@angular/router';
import { filter, map, Observable } from 'rxjs';
import { CartService } from '../cart.service';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.component.html',
  styleUrls: ['./fashion.component.scss'],
})
export class FashionComponent {
  itemsData: any = [{}];
  message: any;
  newArr: any
  productData: any;
  arrayOfVals: any = [];
  appstate$: Observable<object> | undefined;
  searchText: any;
  constructor(private cart: CartService, private http: HttpService, private _detector: ChangeDetectorRef, private router: Router
  ) {

  }
  ngOnInit() {
    this.getGoodsData();
this.searchText=this.http.searchText;
this.getSearchText();
//console.log('searchtext',this.searchText)
  }
  addToCart(data: any, id: string) {
    //console.log('hey sending cart data',data);
    this.cart.addToCart(data, id);
  }
  getGoodsData() {
    this.http.getItemDetails().subscribe(data => {
      this.itemsData = data;
      this.newArr = this.itemsData.filter((x: any) =>
        x.category.includes('clothing'));

    });
  }
  descriptionPage(title: any, price: any, image: any, description: any,pageName:string) {

    let navigationExtras: NavigationExtras = {
      queryParams: {
        'title': title, 'price': price, 'image': image, 'description': description,'pageName':pageName
      }
    };
    this.router.navigate(['/description'], navigationExtras);
 }
  getSearchText() {
   this.http.getSearchText().subscribe(data=>{
  this.searchText=data;
  console.log('in fashion',this.searchText)

})
  }
}
