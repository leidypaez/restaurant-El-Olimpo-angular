import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor() { }

  public dataShopping:any[] = []

  cargar(){
   let tmp:any = localStorage.getItem('carrito')
   if(tmp == undefined || tmp == null){
     this.dataShopping = [];
   }
   else{
    this.dataShopping =  JSON.parse(tmp)
   }

   this.calculartotales()

  }
  public total:number = 0
  calculartotales(){

    this.total = 0;
    for (let a = 0; a < this.dataShopping.length; a++) {

      this.total = this.total + this.dataShopping[a].price

    }
  }

  addShoppingCart(item:any){
    this.dataShopping.push(item)
    localStorage.setItem('Shopping', JSON.stringify(this.dataShopping))
    console.log(this.dataShopping)
    this.calculartotales()
  }

  eliminar(id:number){
    this.dataShopping.splice(id,1)
    localStorage.setItem('carrito', JSON.stringify(this.dataShopping))
    this.calculartotales()
  }

}
