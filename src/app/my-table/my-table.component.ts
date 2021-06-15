import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.scss'],
})
export class MyTableComponent implements OnInit {
  @Input() products: any[] = [];

  constructor() {
    console.log('constructor', this.products);
  }

  ngOnInit(): void {
    console.log('onInit', this.products);
  }
}
