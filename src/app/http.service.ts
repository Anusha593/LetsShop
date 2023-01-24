import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { CartProduct, Product } from './types/product';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private cartUpdates = new Subject<any>();
  public cartUpdates$ = this.cartUpdates.asObservable();

  private subject =new Subject();
  itemsData: any;
  searchText: any;

  sendSearchText(message:any){
    //console.log('in service send messages method',message)
    this.subject.next(message)
this.searchText=message;
  }

getSearchText(){
  return this.subject.asObservable();
}
  constructor(private http:HttpClient) { }
  getItemDetails(){
    return this.http.get('https://fakestoreapi.com/products')
  }
  }
