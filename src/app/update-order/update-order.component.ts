import { Component, OnInit } from '@angular/core';
import {Order} from '../model/order';
import {ActivatedRoute, Router} from '@angular/router';
import {OrderService} from '../services/order.service';

@Component({
  selector: 'app-update-order',
  templateUrl: './update-order.component.html',
  styles: [
  ]
})
export class UpdateOrderComponent implements OnInit {
  currentOrder = new Order();
  constructor(private activatedRoute: ActivatedRoute, private orderService: OrderService, private router: Router) { }

  ngOnInit(){
    console.log(this.activatedRoute.snapshot.params.id);
    this.orderService.getOneOrder(this.activatedRoute.snapshot.params.id).subscribe( prod => { this.currentOrder = prod; } ) ;
    console.log(this.currentOrder);
  }

  update() {
    this.orderService.update(this.currentOrder).subscribe(order => {
        this.router.navigate(['orders']);
      }, (error) => { alert('Problème lors de la modification !'); }
    );
  }
}
