import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor() { }

  public datacarrito:any[] = []

  cargar(){
   let tmp:any = localStorage.getItem('carrito')
   if(tmp == undefined || tmp == null){
     this.datacarrito = [];
   }
   else{
    this.datacarrito =  JSON.parse(tmp)
   }

   this.calculartotales()
   
  }
  public total:number = 0
  calculartotales(){

    this.total = 0;
    for (let a = 0; a < this.datacarrito.length; a++) {
      
      this.total = this.total + this.datacarrito[a].price

    }
  }
  agregar(item:any){
    this.datacarrito.push(item)
    localStorage.setItem('carrito', JSON.stringify(this.datacarrito))
    console.log(this.datacarrito)
    this.calculartotales()
  }

  eliminar(id:number){
    this.datacarrito.splice(id,1)
    localStorage.setItem('carrito', JSON.stringify(this.datacarrito))
    this.calculartotales()
  }

}
