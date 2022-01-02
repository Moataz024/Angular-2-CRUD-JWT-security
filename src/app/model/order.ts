import {Customer} from './customer';

export class Order {
    orderId: number;
    orderDate: Date;
    price: number;
    productName: string;
    cust: Customer;

}
