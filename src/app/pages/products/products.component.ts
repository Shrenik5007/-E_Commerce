import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { RestService } from 'src/app/service/rest.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public productList:any;

  constructor(private _rest : RestService, private _cart : CartService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this._rest.getProduct().subscribe(resp => {
      this.productList = resp;

      this.productList.forEach((a:any) => {
        Object.assign(a, {quantity:1, total:a.price});
      });
    })

  }

  addToCart(product:any){
    this._cart.addtoCart(product);
  }


}
