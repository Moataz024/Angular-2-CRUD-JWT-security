import { Component, OnInit } from '@angular/core';
import {Order} from '../model/order';
import {OrderService} from '../services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: Order[];
  constructor(private orderService: OrderService) { }
  ngOnInit(): void {
    this.orderService.listOrders().subscribe(ords => {
       console.log(ords);
       this.orders = ords;
    });
  }
  // tslint:disable-next-line:typedef
  delete(orderId: number){
    const conf = confirm('Etes-vous sur?');
    if (conf) {
    this.orderService.delete(orderId).subscribe(res => {
      console.log(res);
      window.location.reload();
    });
    }
  }
}
