import { Injectable } from '@angular/core';
import {Order} from '../model/order';
import {HttpClient , HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  order = new Order();
  orders: Order[];
  constructor(private http: HttpClient) {

  }
  listOrders(): Observable<Order[]> {
     return this.http.get<Order[]>('http://localhost:8080/order/api');
  }

  addOrder(order: Order): Observable<any>{
    return this.http.post('http://localhost:8080/order/api', order);
  }
  update(order: Order): Observable<Order>{
    return this.http.put<Order>('http://localhost:8080/order/api', order, httpOptions);
  }
  delete(id: number): Observable<any>{
      return this.http.delete('http://localhost:8080/order/api/' + id);
  }

  getOneOrder(id: number): Observable<Order>{
    return this.http.get<Order>('http://localhost:8080/order/api/' + id);
}

}
