import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiOlimpoService } from 'src/app/service/api-olimpo.service';
import { UserI } from 'src/app/service/models/interface.user';

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
  
  constructor(private service: ApiOlimpoService, private router: Router) { }

  ngOnInit(): void { }

  onSubmit () {

    const { username, email, password, checked } = this.formRegister.value;
    if(password !== checked){ this.passwordMatch = false; return }
    const body : UserI = { username, email, password }
     
    this.service.register(body)
    .subscribe((data : any) =>{
      if(data.user) this.router.navigate(['/signIn']);
    });     
  }

  get user () { return this.formRegister.get('username') }
  get email () { return this.formRegister.get('email') }
  get password () { return this.formRegister.get('password') }
  get checker () { return this.formRegister.get('checked') }
  get noMatch () { return this.passwordMatch }
  
}