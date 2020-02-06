import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-notification.component.html',
  styleUrls: ['./product-notification.component.css']
})
export class ProductNotificationComponent implements OnInit {
@Input() product;
 @Output() notify = new EventEmitter();
 
  constructor() { }

  ngOnInit() {
  }

}