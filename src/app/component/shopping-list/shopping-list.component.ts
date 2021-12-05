import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  constructor(public cart:CarritoService) { }

  ngOnInit(): void {
  }

    eliminaritem(id:number){
    console.log(id)
    this.cart.eliminar(id)
  }

}
