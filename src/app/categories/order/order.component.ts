import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';
import {ActivatedRoute} from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit{
  category!:String;
  products!:any[];
  categories!:any[];
  nodata:boolean =false;
  
  constructor(private ds:DataService,private route:ActivatedRoute){}
  ngOnInit(): void {
    this.route.queryParamMap.subscribe({
      next: data => {
        this.category = String(data.get('category'));
        this.ds.getProducts(this.category).subscribe({
          next : data => {
            this.products = data
            this.nodata = false;
          },
          error: err => this.nodata = true 
        });
    
      }
    });
        
    this.ds.getCategories().subscribe({
      next: data => this.categories = data,
      error: err => console.log(err)
    });

    
    
  }
  addtocart(id:number){
    
    this.ds.getProduct(id).subscribe({
      next: data =>{
        console.log(data);
      }
    })  
  }

  
  
}
