import { Component, OnInit } from '@angular/core';
import { ApiOlimpoService } from '../../service/api-olimpo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public dishes: any;
  public id: any

  constructor(private service:ApiOlimpoService) {}

  ngOnInit(): void { }

  getDishes(){
    this.service.getDishes().subscribe((data : any) =>{
      this.dishes = data.dishes
    })
  }

  removeDishes(){
    this.service.removeDishes().subscribe(() =>{
      this.id = this.id.filter((dishes: { id: any; }) => dishes.id != this.dishes.id)
    })
  }

  type:string = 'tradicional';
  changeType(text:string) {
    this.type = text;
  }

  data:any[] = [
    {
      "name": "Bandeja paisa",
      "category": "tradicional",
      "price": 20000,
      "description": "Arroz blanco, Chicharrón,Huevo frito, Tajadas de plátano, Chorizo, Arepa, Fríjoles rojos Colombia.",
      "imageUrl": "../../../assets/imagesFood/colombia-bandeja-paisa.jpg"
    },
    {
      "name": "ajiaco",
      "category": "tradicional",
      "price": 15000,
      "description": "Diferentes tipos de papas y encurtidos, crema de leche  Colombiano ",
      "imageUrl": "../../../assets/imagesFood/colombia-ajiaco.jpg"
    },
    {
      "name": "Coq au vin",
      "category": "tradicional",
      "price": 25000,
      "description": "Ave con vino y vegetales  Frances ",
      "imageUrl": "../../../assets/imagesFood/francia-Coq au vin.jpg"
    },
    {
      "name": "Ratatouille",
      "category": "tradicional",
      "price": 28000,
      "description": "Estofado de hortalizas Frances  ",
      "imageUrl": "../../../assets/imagesFood/francia-Ratatouille.jpg"
    },
    {
      "name": "lasagna",
      "category": "tradicional",
      "price": 28000,
      "description": "Pastel de carnes salsa boloñesa y bechamel Italy.",
      "imageUrl": "../../../assets/imagesFood/italia-lasagna.jpg"
    },
    {
      "name": "pasta",
      "category": "tradicional",
      "price": 20000,
      "description": "Pasta con ingredientes al gusto  Italy ",
      "imageUrl": "../../../assets/imagesFood/italia-pasta.jpg"
    },
    {
      "name": "caraotas  negras",
      "category": "tradicional",
      "price": 20000,
      "description": "  Caraotas negras aliñadas sal y azucar al gusto  Venezuela",
      "imageUrl": "../../../assets/imagesFood/venezuela-caraocas-negras.jpg"
    },
    {
      "name": "chupecaraqueño",
      "category": "tradicional",
      "price": 15000,
      "description": " Caldo de pollo con verdura y leche Venezuela",
      "imageUrl": "../../../assets/imagesFood/venezuela-chupe-caraqueño.jpg"
    },
    {
      "name": "Postre chocolate",
      "category": "postres",
      "price": 15000,
      "description": "Chocolate, leche condesada ",
      "imageUrl": "../../../assets/imagesFood/postre-chocolate.jpg"
    },
    {
      "name": "postre de limon",
      "category": "postres",
      "price": 15000,
      "description": " Limon , gelatina , leche condesada galletas ",
      "imageUrl": "../../../assets/imagesFood/postre-de-limon.jpg"

    },
    {
      "name": "postre de miel y arequipe",
      "category": "postres",
      "price": 12000,
      "description": " Miel arequipe azucar coco, almendras ",
      "imageUrl": "../../../assets/imagesFood/postre-de-miel-y-arequipe.jpg"
    },
    {
      "name": "fresas con crema",
      "category": "postres",
      "price": 10000,
      "description": "Las fresas con nata o crema ",
      "imageUrl": "../../../assets/imagesFood/postre-fresas-con-crema-y-frambuesa.jpg"
    },
    {
      "name": "frambuesas con gelatina",
      "category": "postres",
      "price": 12000,
      "description": " Frambuesas con gelatina , azucar morena ",
      "imageUrl": "../../../assets/imagesFood/postre-fresas-con-gelatina-y-frambuesas.jpg"
    },
    {
      "name": "mini cupkcaques",
      "category": "postres",
      "price": 10000,
      "description": "Ideales para todo tipo de situacion variadad de sabores ",
      "imageUrl": "../../../assets/imagesFood/postre-mini-cupkcaques.jpg"
    },
    {
      "name": "pastel de Mora ",
      "category": "postres",
      "price": 15000,
      "description": "Mora azucar  yogur natural limon ",
      "imageUrl": "../../../assets/imagesFood/postre-pastel-de-mora.jpg"
    },
    {
      "name": "postre sencillo de frambuesa",
      "category": "postres",
      "price": 12000,
      "description": " franguesas crema de leche ",
      "imageUrl": "../../../assets/imagesFood/postre-sencillo-de-frambuesas.jpg"
    },
    {
      "name": "Agua",
      "category": "bebidas",
      "price": 6000,
      "description": "Bebidas refrescante a sus gustos ",
      "imageUrl": "../../../assets/imagesFood/Agua.jpg"
    },
    {
      "name": "Malteada de chocolate",
      "category": "bebidas",
      "price": 10000,
      "description": " helado de chocolate y vainilla ,hielo, leche entera",
      "imageUrl": "../../../assets/imagesFood/Malteada chocolate.jpg"
    },
    {
      "name": "Malteada de fresa",
      "category": "bebidas",
      "price": 10000,
      "description": " helado de fresa y vainilla ,hielo, leche entera",
      "imageUrl": "../../../assets/imagesFood/Malteada fresa.jpg"
    },
    {
      "name": "Malteada de vainilla",
      "category": "bebidas",
      "price": 10000,
      "description": "helado de  vainilla ,hielo, leche entera",
      "imageUrl": "../../../assets/imagesFood/MAlteada de vainilla.jpg"
    },
    {
      "name": "Gaseosa",
      "category": "bebidas",
      "price": 8000,
      "description": " refresco, fresco o soda",
      "imageUrl": "../../../assets/imagesFood/Gaseosa.jpg"
    },
    {
      "name": "Jugo de maracuya",
      "category": "bebidas",
      "price": 10000,
      "description": "Maracuya jugo de limon y azucar ",
      "imageUrl": "../../../assets/imagesFood/Jugo de maracuya.jpg"
    },
    {
      "name": "Jugo frutos rojos",
      "category": "bebidas",
      "price": 10000,
      "description": " Variedad de frutos rojos al gusto azucar morena ",
      "imageUrl": "../../../assets/imagesFood/Jugo frutos rojos.jpg"
    },
    {
      "name": "Te helado de limon y mora",
      "category": "bebidas",
      "price": 9000,
      "description": " Te verde jugo de limon , mora miel y azucar ",
      "imageUrl": "../../../assets/imagesFood/te-helado-limon-mora.jpg"
    },
    {
      "name": "Aros de cebolla",
      "category": "adicionales",
      "price": 5000,
      "description": "Cebolla sal a gusto acompañado de chile rojo en polvo , ",
      "imageUrl": "../../../assets/imagesFood/aros cebolla.jpg"
    },
    {
      "name": "cubitos de queso",
      "category": "adicionales",
      "price": 5000,
      "description": " Queso mozarela parmesano y pan rallado ",
      "imageUrl": "../../../assets/imagesFood/cubos-de-queso.jpg"
    },
    {
      "name": "deditos de queso",
      "category": "adicionales",
      "price": 8000,
      "description": " Deditos de harina trigo con quesos al horno o frito ",
      "imageUrl": "../../../assets/imagesFood/deditos de queso.jpg"
    },
    {
      "name": "Ensalada de pollo",
      "category": "adicionales",
      "price": 4000,
      "description": "Carne de pollo y vegetales ,delisiosas ensaladas  para que armes tu plato  como mas te guste ",
      "imageUrl": "../../../assets/imagesFood/ensalada pollo.jpg"
    },
    {
      "name": "Ensalada vegetales",
      "category": "adicionales",
      "price": 4000,
      "description": " Vegetales ,delisiosas ensaladas  para que armes tu plato  como mas te guste ",
      "imageUrl": "../../../assets/imagesFood/ensalada vegetales.jpg"
    },
    {
      "name": "Porcion de jamon",
      "category": "adicionales",
      "price": 5000,
      "description": "Jamon de todos tipos al gusto  ",
      "imageUrl": "../../../assets/imagesFood/jamon.jpg"
    },
    {
      "name": "Papas a la francesa",
      "category": "adicionales",
      "price": 6000,
      "description": "Papas sal aceites para freirses crocantes y deliciosas para que armes tu plato  como más te guste " ,
      "imageUrl": "../../../assets/imagesFood/papas-francesa.jpg"
    },
    {
      "name": "Yuca a la francesa",
      "category": "adicionales",
      "price": 6000,
      "description": "Yuca aceite de oliva para freir sal al gusto , crocantes y delisiosas para que armes tu plato  como mas te guste ",
      "imageUrl": "../../../assets/imagesFood/yuca-francesa.jpg"
    }
  ]

}
