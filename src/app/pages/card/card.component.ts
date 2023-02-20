import { Component } from '@angular/core';
import { RestService } from 'src/app/service/rest.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  public productList : any;

  constructor(private _rest : RestService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    // this._rest.getProduct().subscribe(resp => {
    //   this.productList
    // })
  }

}
