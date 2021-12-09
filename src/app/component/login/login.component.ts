import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiOlimpoService } from 'src/app/service/api-olimpo.service';
import { LogInI } from 'src/app/service/models/interface.login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public notUser = true;

  public formLogin = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor(private service: ApiOlimpoService, private router: Router ) { }

  ngOnInit(): void { }

  onSubmit () {
    const { email, password } = this.formLogin.value;
    const body : LogInI = { email, password }
    
    this.service.logIn(body).subscribe((data : any) => { 

      if (data.token) { 
        localStorage.setItem('x-olimpo-access', data.token)
        this.router.navigate(['/home']); 
      }
      
    }, (e) => {
      localStorage.removeItem('x-olimpo-access')
      this.notUser = false;
    });      
  }
  
  get user () { return this.formLogin.get('email') }
  get password () { return this.formLogin.get('password') }

}