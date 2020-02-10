import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/order.service';
import { Menu } from '../model/menu.model';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  constructor(private orderService:OrderService) {

  }
  menuList: Menu[];
 
ngOnInit(){
  this.menuList = this.orderService.orderdProducts;
  console.log(this.menuList);
 this.totalProducts();
}
totalProducts(){

    
  }
  
  


}
