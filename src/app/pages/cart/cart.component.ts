import { Component } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  public products:any =[];
  public grandTotal !:number;

  constructor(private _cart: CartService){}


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this._cart.getProducts().subscribe((resp)=>{
      this.products=resp;
      this.grandTotal = this._cart.getTotalPrice();
    })
  }
  removeItem(item:any){
    this._cart.removeCartItem(item)
  }

  emptycart(){
    this._cart.removeAllCart();
  }

}
