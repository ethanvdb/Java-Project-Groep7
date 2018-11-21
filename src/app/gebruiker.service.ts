import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GebruikerService {

  constructor(private _http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  url = "http://localhost:3000/Gebruikers/login";
  gebruiker: any;
  gebruiker$;

  login(body:any){
    this.gebruiker$ = this._http.post<any>(this.url, body, this.httpOptions);
    this.gebruiker$.subscribe(val=>{
      this.gebruiker = (val);
      localStorage.setItem('gebruiker', JSON.stringify(this.gebruiker));
    });
  }

}
