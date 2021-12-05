import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiOlimpoService } from 'src/app/service/api-olimpo.service';
import { UserI } from 'src/app/service/models/interface.user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  public usuario = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    checked: new FormControl('', Validators.required),
  });
  
  constructor(private service: ApiOlimpoService) { }

  ngOnInit(): void { }

  onSubmit () {

    const { username, email, password, checked } = this.usuario.value;
    if(password !== checked)  return
    
    const body : UserI = { username, email, password }
    console.log(body);
    
    this.service.register(body)
    .subscribe((data : any) =>{
      console.log(data)
    });      
  }

//   Registrar(datos:any){
//     var post = {
//       host:this.peticion.urlLocal,
//       path:'/usuarios/Guardar',
//       data:{
//         nombre:datos.nombre,
//         email:datos.email,
//         password:datos.password,
//         confirmar:datos.confirmar
//       }
//     }

//    this.peticion.Post(post.host + post.path,post.data).then((res:any) => {
//      console.log(res)
//    })
//   }

  
}
