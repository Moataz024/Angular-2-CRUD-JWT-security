import { Component, OnInit } from '@angular/core';
import {Customer} from '../model/customer';
import {CustomerService} from '../services/customer.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  customers: Customer[];
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.listCustomers().subscribe(customers => {
      console.log(customers);
      this.customers = customers;
    });
  }
  delete(customerId: number){
    let conf = confirm('Etes-vous sur?');
    if (conf) {
      this.customerService.deleteCustomer(customerId).subscribe(res => {
        console.log(res);
        window.location.reload();
      });
    }
  }

}
