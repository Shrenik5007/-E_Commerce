import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private _http: HttpClient) { }

  getProduct(){
    return this._http.get<any>("https://fakestoreapi.com/products")
    .pipe(map((resp:any)=> {
      return resp;
    }))
  }
}
