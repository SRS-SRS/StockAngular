import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  products: any[] = [];
  constructor(private http: HttpClient) {}

  getAllProducts() {
    this.http
      .get('http://localhost:8080/stockMaven/api/products/all')
      .subscribe((res: any) => {
        this.products = res;
      });
  }
}
