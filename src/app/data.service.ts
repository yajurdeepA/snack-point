import { Injectable } from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http';
import{Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  url:string ="http://localhost:3000/";
  constructor(private http:HttpClient) { }
  getCategories():Observable<any[]>{
    return this.http.get<any[]>(`${this.url}categories`);
  }
  getProducts(category:String):Observable<any[]>{
    
    const params = new HttpParams().set('category',String(category));
    return this.http.get<any[]>(`${this.url}products`,{'params':params});
  }

  getProduct(id:number):Observable<any>{
    const params = new HttpParams().set('id',id);
    return this.http.get<any[]>(`${this.url}product`,{'params':params});
  }
}
