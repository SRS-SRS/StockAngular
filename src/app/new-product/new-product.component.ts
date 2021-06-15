import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss'],
})
export class NewProductComponent {
  title = "Products' Stock";

  // powers = ['Power 1', 'Power 2'];
  // tutorial forms Angular. Cria select com o que está escrito no arreio

  productForm = new FormGroup({
    pvp: new FormControl(''),
    iva: new FormControl(''),
    discount: new FormControl(''),
  });

  productValue = '';

  constructor(private http: HttpClient) {}

  setProductValue(product: any) {
    console.log(this.productForm);
    // <- product form
    this.productValue = JSON.stringify(product);
    // -> product value
  }

  createProduct() {
    this.http
      .post(
        'http://localhost:8080/stockMaven/api/products',
        this.productForm.value
      )
      .subscribe((res: any) => this.setProductValue(res));
  }
}
