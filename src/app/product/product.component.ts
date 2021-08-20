import { Component, OnInit } from '@angular/core';
import {IProduct} from '../iproduct';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: IProduct[] = [];
  product: IProduct = {
    id: 1,

  };
  constructor() { }

  ngOnInit() {
  }

  createProduct() {
    let product1 = {
      id: this.product.id,
      name: this.product.name,
      price: this.product.price
    };
    this.products.push(product1);
  }
  createProduct1(){
    let product1 = {
      id: this.productForm.value.id,
      name: this.productForm.value.name,
      price: this.productForm.value.price
    };
    this.productForm.setValue({
      id: 2,
      name: 'abcxyz',
      price: 12345
    })
    this.products.push(product1)
    console.log(product1)
  }
  productForm : FormGroup = new FormGroup({
    id: new FormControl(this.product.id,[Validators.required,Validators.min(1)]),
    name: new FormControl('',[Validators.required,Validators.minLength(2)]),
    price: new FormControl('',[Validators.required,Validators.pattern(/^\d+$/)])
    }
  )
check(){

}
}
