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

    this.menuList.push(new Menu("Meniul Campionilor",15));
    this.menuList.push(new Menu("Meniul Zilei",13));
    this.menuList.push(new Menu("Meniu Aripioare",13));
    this.menuList.push(new Menu("Meniu Snitel",14));
    this.menuList.push(new Menu("Meniu Cascaval Pane",14));
    this.menuList.push(new Menu("Salata cu Pui",12));
    this.menuList.push(new Menu("Salata Mexicana",12));
    this.menuList.push(new Menu("Sandwich cu Pui",8.5));
    this.menuList.push(new Menu("Sandwich cu Porc",9));
    

  }

  addproduct(menu){
    this.orderService.orderdProducts.push(menu);

  }
  
}
