import { Injectable } from '@angular/core';
import {Customer} from '../model/customer';
import {Observable} from 'rxjs';
import {Order} from '../model/order';
import {HttpClient , HttpHeaders} from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers: Customer[];
  constructor(private http: HttpClient) { }
  listCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>('http://localhost:8080/customer/api');
  }

  addCustomer(customer: Customer): Observable<any>{
    return this.http.post('http://localhost:8080/customer/api', customer);
  }
  updateCustomer(customer: Customer): Observable<Customer>{
    return this.http.put<Customer>('http://localhost:8080/customer/api', customer, httpOptions);
  }
  deleteCustomer(id: number): Observable<any>{
    return this.http.delete('http://localhost:8080/customer/api/' + id);
  }

  getOneCustomer(id: number): Observable<Customer>{
    return this.http.get<Customer>('http://localhost:8080/customer/api/' + id);
  }
}
