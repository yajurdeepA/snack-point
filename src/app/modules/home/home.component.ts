import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  categories!:any[];
  constructor(private ds:DataService){}
  ngOnInit(): void {
    this.ds.getCategories().subscribe({
      next: data => this.categories = data,
      error: err => console.log(err),
      complete : () => console.log("complete")
    });
  }
}
