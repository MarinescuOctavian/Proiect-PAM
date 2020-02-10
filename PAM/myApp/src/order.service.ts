import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
    orderdProducts = [];
    ok=false;
  constructor() { }

  pretTotal(){
    let pretTotal: number;
    if(this.orderdProducts.length<1){
      this.ok=!this.ok;
    }
    return this.ok;
    }
}