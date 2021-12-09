import { Component, OnInit } from '@angular/core';
import { ApiOlimpoService } from 'src/app/service/api-olimpo.service';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  public dishes: any;
  public id: any

  constructor(private shoppingCart:CarritoService) {}

  ngOnInit(): void { }

  add(item:any) {
    this.shoppingCart.addShoppingCart(item)
    console.log(this.shoppingCart);
  }

  // filtro de cada uno de los platos
  type:string = 'tradicional';
  changeType(text:string) {
    this.type = text;
  }

  data:any[] = [
    {
      "name": "Bandeja paisa",
      "category": "tradicional",
      "price": 20000,
      "description": "Arroz blanco, huevo frito, chorizo y plátano maduro.",
      "imageUrl": "../../../assets/imagesFood/colombia-bandeja-paisa.jpg"
    },
    {
      "name": "Coq au vin",
      "category": "tradicional",
      "price": 25000,
      "description": "Estofado de ave elaborado con vino y vegetales.",
      "imageUrl": "../../../assets/imagesFood/francia-Coq au vin.jpg"
    },
    {
      "name": "Ratatouille",
      "category": "tradicional",
      "price": 28000,
      "description": "Estofado elaborado con zanahoria, tomate, remolacha.",
      "imageUrl": "../../../assets/imagesFood/francia-Ratatouille.jpg"
    },
    {
      "name": "Lasagna",
      "category": "tradicional",
      "price": 28000,
      "description": "Pastel de carnes preparado con salsa boloñesa y bechamel.",
      "imageUrl": "../../../assets/imagesFood/italia-lasagna.jpg"
    },
    {
      "name": "Ajiaco",
      "category": "tradicional",
      "price": 15000,
      "description": "Sopa de pollo que contiene diferentes tipos de papa.",
      "imageUrl": "../../../assets/imagesFood/colombia-ajiaco.jpg"
    },
    {
      "name": "Pasta",
      "category": "tradicional",
      "price": 20000,
      "description": " Pasta acompañada de salsa bolognesa y tostadas de pan.",
      "imageUrl": "../../../assets/imagesFood/italia-pasta.jpg"
    },
    {
      "name": "Pabellón criollo",
      "category": "tradicional",
      "price": 20000,
      "description": "Arroz blanco cocido, carne desmechada y caraotas negras.",
      "imageUrl": "../../../assets/imagesFood/venezuela-caraocas-negras.jpg"
    },
    {
      "name": "Chupe Caraqueño",
      "category": "tradicional",
      "price": 15000,
      "description": "Caldo de pollo con verduras y leche.",
      "imageUrl": "../../../assets/imagesFood/venezuela-chupe-caraqueño.jpg"
    },
    {
      "name": "Postre de chocolate",
      "category": "postres",
      "price": 15000,
      "description": " Postre elaborado a base de chocolate y leche condesada.",
      "imageUrl": "../../../assets/imagesFood/postre-chocolate.jpg"
    },
    {
      "name": "Postre de limón",
      "category": "postres",
      "price": 15000,
      "description": "Postre elaborado a base de limón, gelatina y galleta.",
      "imageUrl": "../../../assets/imagesFood/postre-de-limon.jpg"

    },
    {
      "name": "Postre de miel y arequipe",
      "category": "postres",
      "price": 12000,
      "description": "Porción de pastel de vainilla acompañado de miel y arequipe.",
      "imageUrl": "../../../assets/imagesFood/postre-de-miel-y-arequipe.jpg"
    },
    {
      "name": "Fresas con crema",
      "category": "postres",
      "price": 10000,
      "description": "Fresas troceadas y bañadas en nata montada con azúcar.",
      "imageUrl": "../../../assets/imagesFood/postre-fresas-con-crema-y-frambuesa.jpg"
    },
    {
      "name": "Frambuesas con gelatina",
      "category": "postres",
      "price": 12000,
      "description": "Postre elaborado con frambuesas, gelatina y azúcar morena.",
      "imageUrl": "../../../assets/imagesFood/postre-fresas-con-gelatina-y-frambuesas.jpg"
    },
    {
      "name": "Mini cupcakes",
      "category": "postres",
      "price": 7000,
      "description": "Porción de tarta de vainilla acompañada de trozos de frutas.",
      "imageUrl": "../../../assets/imagesFood/postre-mini-cupkcaques.jpg"
    },
    {
      "name": "Pastel de mora ",
      "category": "postres",
      "price": 15000,
      "description": "Pastel elaborado a base de mora, azúcar, yogurt natural y limón.",
      "imageUrl": "../../../assets/imagesFood/postre-pastel-de-mora.jpg"
    },
    {
      "name": "Postre sencillo de frambuesa",
      "category": "postres",
      "price": 12000,
      "description": "Bizcocho relleno de mermelada de frambuesa.",
      "imageUrl": "../../../assets/imagesFood/postre-sencillo-de-frambuesas.jpg"
    },
    {
      "name": "Malteada de chocolate",
      "category": "bebidas",
      "price": 10000,
      "description": " Bebida de helado de chocolate y vainilla.",
      "imageUrl": "../../../assets/imagesFood/Malteada chocolate.jpg"
    },
    {
      "name": "Malteada de fresa",
      "category": "bebidas",
      "price": 10000,
      "description": "Bebida preparada con helado de fresa y vainilla ",
      "imageUrl": "../../../assets/imagesFood/Malteada fresa.jpg"
    },
    {
      "name": "Malteada de vainilla",
      "category": "bebidas",
      "price": 10000,
      "description": "Bebida preparada con helado de vainilla y arequipe.",
      "imageUrl": "../../../assets/imagesFood/MAlteada de vainilla.jpg"
    },
    {
      "name": "Gaseosa",
      "category": "bebidas",
      "price": 6000,
      "description": "Coca-Cola, Postobon, Pepsi.",
      "imageUrl": "../../../assets/imagesFood/Gaseosa.jpg"
    },
    {
      "name": "Jugo de maracuyá",
      "category": "bebidas",
      "price": 10000,
      "description": "Bebida elaborada con maracuyá, jugo de limón y azúcar.",
      "imageUrl": "../../../assets/imagesFood/Jugo de maracuya.jpg"
    },
    {
      "name": "Jugo de frutos rojos",
      "category": "bebidas",
      "price": 10000,
      "description": "Bebida elaborada con frutos rojos y miel.",
      "imageUrl": "../../../assets/imagesFood/Jugo frutos rojos.jpg"
    },
    {
      "name": "Té helado de limón y mora",
      "category": "bebidas",
      "price": 9000,
      "description": "Té verde con jugo de limón, mora y miel.",
      "imageUrl": "../../../assets/imagesFood/te-helado-limon-mora.jpg"
    },
    {
      "name": "Agua",
      "category": "bebidas",
      "price": 6000,
      "description": "Carbonatada.",
      "imageUrl": "../../../assets/imagesFood/Agua.jpg"
    },
    {
      "name": "Aros de cebolla",
      "category": "adicionales",
      "price": 5000,
      "description": "Trozos de cebolla con sal al gusto acompañados de chile rojo en polvo.",
      "imageUrl": "../../../assets/imagesFood/aros cebolla.jpg"
    },
    {
      "name": "Cubitos de queso",
      "category": "adicionales",
      "price": 5000,
      "description": "Trozitos de queso mozzarella acompañados de salsa de ajo.",
      "imageUrl": "../../../assets/imagesFood/cubos-de-queso.jpg"
    },
    {
      "name": "Deditos de queso",
      "category": "adicionales",
      "price": 8000,
      "description": " Deditos de harina trigo con quesos al horno o frito ",
      "imageUrl": "../../../assets/imagesFood/deditos de queso.jpg"
    },
    {
      "name": "Ensalada de vegetales",
      "category": "adicionales",
      "price": 4000,
      "description": "Porción de vegetales picados en pequeños trozos bañados en salsa.",
      "imageUrl": "../../../../../assets/imagesFood/ensalada-vegetales2.jpg"
    },
    {
      "name": "Ensalada de pollo",
      "category": "adicionales",
      "price": 4000,
      "description": "Ensalada de vegetales con carne de pollo.",
      "imageUrl": "../../../assets/imagesFood/ensalada pollo.jpg"
    },
    {
      "name": "Porción de jamón",
      "category": "adicionales",
      "price": 5000,
      "description": "Más de 5 porciones de jamón ahumado importado.",
      "imageUrl": "../../../assets/imagesFood/jamon.jpg"
    },
    {
      "name": "Papas a la francesa",
      "category": "adicionales",
      "price": 6000,
      "description": "Papas cortadas al estilo francés, fritas y crocantes, con sal al gusto." ,
      "imageUrl": "../../../assets/imagesFood/papas-francesa.jpg"
    },
    {
      "name": "Yuca a la francesa",
      "category": "adicionales",
      "price": 6000,
      "description": "Porción de yuca frita, al estilo francés, con sal al gusto.",
      "imageUrl": "../../../assets/imagesFood/yuca-francesa.jpg"
    }
  ]

}