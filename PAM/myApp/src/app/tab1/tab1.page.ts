import { Component } from '@angular/core';
import { Menu } from '../model/menu.model';
import { OrderService } from 'src/order.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

 menuList= new Array<Menu>();

  constructor(public orderService:OrderService) {

    this.menuList.push(new Menu("Meniul campionilor",15));

    this.menuList.push(new Menu("Meniul zilei",13));

    this.menuList.push(new Menu("Meniu Aripioare",12));
    this.menuList.push(new Menu("Meniu Snitel",14));

  }

  addproduct(menu){
    this.orderService.orderdProducts.push(menu);

    console.log(this.orderService.orderdProducts);
  }

}
