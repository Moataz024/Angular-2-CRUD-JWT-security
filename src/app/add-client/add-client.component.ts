import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CustomerService} from '../services/customer.service';
import {Customer} from "../model/customer";

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  customer = new Customer();
  constructor(private customerService: CustomerService, private router: Router) { }
  addClient(){
    this.customerService.addCustomer(this.customer).subscribe(res => console.log(res));
    this.router.navigate(['customers']);
  }
  ngOnInit(): void {
  }

}
