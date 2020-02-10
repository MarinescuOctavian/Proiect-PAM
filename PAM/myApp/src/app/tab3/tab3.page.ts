import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/order.service';
import { Menu } from '../model/menu.model';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  constructor(private orderService:OrderService) {

  }
menuList: Menu[];

ngOnInit(){
  this.menuList = this.orderService.orderdProducts;
  console.log(this.menuList);
 
}

}

