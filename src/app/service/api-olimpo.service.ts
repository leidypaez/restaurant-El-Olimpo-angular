import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DishI } from './models/interface.dish';
import { UserI } from './models/interface.user';
import { LogInI } from './models/interface.login';

@Injectable({
  providedIn: 'root'
})

export class ApiOlimpoService {

  private url = 'http://127.0.0.1:3000/api/v1'

  constructor(private http: HttpClient) { }

  
  logIn (body : LogInI) : Observable <any> {
    const urlNew = this.url + '/auth/signIn/';
    return this.http.post(urlNew, body);
  }
  
  register(body : UserI) : Observable <any> {
    const urlNew = this.url + '/auth/signUp/';
    return this.http.post(urlNew, body);
  }
  
  logout () {
    const urlNew = this.url + '/auth/logout/';
  }
  
  getDishes() : Observable <DishI[]> {
    const urlNew = this.url + '/dish/';
    return this.http.get<DishI[]>(urlNew);
  }
  
  removeDishes() : Observable <DishI[]> {
    const urlNew = this.url + '/dish/:id';
    return this.http.delete<DishI[]>(urlNew)
  }

}