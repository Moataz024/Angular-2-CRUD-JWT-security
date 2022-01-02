import { Component, OnInit } from '@angular/core';
import {Order} from '../model/order';
import {OrderService} from '../services/order.service';
import {Router} from '@angular/router';
import {Customer} from '../model/customer';
import {CustomerService} from '../services/customer.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
  customers: Customer[];
  order = new Order();
  constructor(private orderService: OrderService, private router: Router, private customerService: CustomerService) {
  }


  addOrder(){
    console.log(this.order);
    this.orderService.addOrder(this.order).subscribe(res => console.log(res));

    this.router.navigate(['orders']);
  }
  ngOnInit(): void {
    this.customerService.listCustomers().subscribe(customers => {
      console.log(customers);
      this.customers = customers;
    });
  }

}
