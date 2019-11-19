import { Component } from '@angular/core';
import { Menu } from '../model/menu.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  menuList=new Array<Menu>();

  constructor() {

    this.menuList.push(
      new Menu("Meniu",12));
      
    this.menuList.push(
      new Menu("Meniu",12));
     
    this.menuList.push(
      new Menu("Meniu",12));
    


      
  }

}
