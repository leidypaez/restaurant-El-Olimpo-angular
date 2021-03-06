import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  constructor(public cart:CarritoService) { }

  ngOnInit(): void {
  }

  eliminaritem(id:number){
    console.log(id)
    this.cart.eliminar(id)
  }

}
