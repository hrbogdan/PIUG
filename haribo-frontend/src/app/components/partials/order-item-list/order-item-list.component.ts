import { Component, Input } from '@angular/core';
import { Order } from 'src/app/shared/models/Order';

@Component({
  selector: 'app-order-item-list',
  templateUrl: './order-item-list.component.html',
  styleUrls: ['./order-item-list.component.css'],
})
export class OrderItemListComponent {
  @Input()
  order!: Order;
}
