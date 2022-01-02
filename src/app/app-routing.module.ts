import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OrdersComponent} from './orders/orders.component';
import {AddOrderComponent} from './add-order/add-order.component';
import {UpdateOrderComponent} from './update-order/update-order.component';
import {ClientsComponent} from './clients/clients.component';
import {AddClientComponent} from './add-client/add-client.component';
import {UpdateClientComponent} from './update-client/update-client.component';

const routes: Routes = [
  {path: 'orders', component : OrdersComponent},
  {path: 'addOrder', component : AddOrderComponent},
  {path: 'updateOrder/:id', component : UpdateOrderComponent},
  {path: 'customers', component: ClientsComponent},
  {path: 'addCustomer', component: AddClientComponent},
  {path: 'updateCustomer/:id', component: UpdateClientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
