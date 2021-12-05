import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiOlimpoService } from 'src/app/service/api-olimpo.service';
import { LogInI } from 'src/app/service/models/interface.login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public usuario = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private service: ApiOlimpoService) {
      console.log({ "email": "user01@gmail.com", "password": "@user@" });
   }

  ngOnInit(): void { }

  onSubmit () {
    const { email, password } = this.usuario.value;
    const body : LogInI = { email, password }
   
    this.service.logIn(body)
    .subscribe((data : any) =>{
      console.log(data)
    });      
  }

}