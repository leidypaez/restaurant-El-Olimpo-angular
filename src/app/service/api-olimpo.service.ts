import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserI } from './models/interface.user';
import { DishI } from './models/interface.dish';
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
    return this.http.get<DishI[]>(
      `${this.url}/dish/`, 
      { headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('x-olimpo-access')}`
      })}
    );
  }
  
  removeDishes() : Observable <DishI[]> {
    const urlNew = this.url + '/dish/:id';
    return this.http.delete<DishI[]>(urlNew)
  }

}