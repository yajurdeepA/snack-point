import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { HomeComponent } from 'src/app/modules/home/home.component';
import {RouterModule} from '@angular/router';
import { CartComponent } from 'src/app/modules/cart/cart.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BiryaniComponent } from 'src/app/categories/biryani/biryani.component';
import {HttpClientModule} from '@angular/common/http';
import { OrderComponent } from 'src/app/categories/order/order.component';


@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    CartComponent,
    BiryaniComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    HttpClientModule
  ]
})
export class DefaultModule { }
