import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  product!:any[];
  cart!:any[];
  constructor(private ds:DataService) { }
  addToCart(id:number){

    this.ds.getProduct(id).subscribe({
      next: data =>{
        this.product = data;
        sessionStorage.setItem('cart',JSON.stringify(this.product));
      console.log(JSON.parse(sessionStorage.getItem('cart') || '{}'));
      }
    })
    
    
    /*sessionStorage.setItem('cart',JSON.stringify(this.product));
    console.log(JSON.parse(sessionStorage.getItem('cart') || '{}'));
    if(sessionStorage.getItem('cart') == null){
      
    } */
  }
}
