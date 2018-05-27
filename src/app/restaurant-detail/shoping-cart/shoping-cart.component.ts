import { Component, OnInit } from '@angular/core';
import { ShopingCartService } from './shoping-cart.service';

@Component({
  selector: 'mt-shoping-cart',
  templateUrl: './shoping-cart.component.html'
})
export class ShopingCartComponent implements OnInit {

  constructor(private shoppingCartService: ShopingCartService) { }

  ngOnInit() {
  }

  items(): any[]{
    return this.shoppingCartService.items;
  }

  clear(){
    this.shoppingCartService.clear()
  }

  removeItem(item: any){
    this.shoppingCartService.removeItem(item);
  }

  addItem(item: any){
    this.shoppingCartService.addItem(item);
  }


  total(): number {
    return this.shoppingCartService.total()
  }

}
