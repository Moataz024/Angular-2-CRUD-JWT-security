import { Component, OnInit } from '@angular/core';
import {Customer} from '../model/customer';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomerService} from '../services/customer.service';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {
  currentCustomer = new Customer();
  constructor(private activatedRoute: ActivatedRoute, private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params.id);
    this.customerService.getOneCustomer(this.activatedRoute.snapshot.params.id).subscribe( cust => { this.currentCustomer = cust; } ) ;
    console.log(this.currentCustomer);
  }
  update() {
    this.customerService.updateCustomer(this.currentCustomer).subscribe(customer => {
        this.router.navigate(['customers']);
      }, (error) => { alert('Problème lors de la modification !'); }
    );
  }
}
