import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiOlimpoService } from 'src/app/service/api-olimpo.service';
import { UserI } from 'src/app/service/models/interface.user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  passwordMatch = true;

  public formRegister = new FormGroup({
    email:    new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    checked:  new FormControl('', [Validators.required, Validators.minLength(6)]),
    username: new FormControl('', [Validators.required, Validators.nullValidator])
  });
  constructor(private service: ApiOlimpoService, private router:Router) { }

  ngOnInit(): void { }

  onSubmit () {

    const { username, email, password, checked } = this.formRegister.value;
    if(password !== checked){ this.passwordMatch = false; return }
    const body : UserI = { username, email, password }

    this.service.register(body)
    .subscribe((data : any) =>{
      console.log(data)
      this.router.navigate(["/signIn"])
    });
  }

  get user () { return this.formRegister.get('username') }
  get email () { return this.formRegister.get('email') }
  get password () { return this.formRegister.get('password') }
  get checker () { return this.formRegister.get('checked') }
  get noMatch () { return this.passwordMatch }

//   Registrar(datos:any){
//     var post = {
//       host:this.peticion.urlLocal,
//       path:'/formRegisters/Guardar',
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
