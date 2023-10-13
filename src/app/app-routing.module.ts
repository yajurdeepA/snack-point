import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { HomeComponent } from './modules/home/home.component';
import { CartComponent } from './modules/cart/cart.component';
import { OrderComponent } from './categories/order/order.component';
const routes: Routes = [
  {path:'',component:DefaultComponent,
  children:[
    {path:'',component:HomeComponent},
    {path:'cart',component:CartComponent},
    {path:'order',component:OrderComponent}
  
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
