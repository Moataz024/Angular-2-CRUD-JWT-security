import {Order} from './order';

export class Customer{
  customerId: number;
  customerName: string;
  customerAddress: string;
  dateOfBirth: Date;
  customerOrders: Order[];
}
