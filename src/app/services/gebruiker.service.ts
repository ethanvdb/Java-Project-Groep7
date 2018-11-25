import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {share} from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GebruikerService {

  readonly LOGIN_URL = "http://localhost:3000/Gebruikers/login";
  readonly GEBRUIKER_URL = 'http://localhost:3000/gebruikers/';
  readonly VOLTOOIDEOPDRACHT_URL = 'http://localhost:3000/voltooideOpdrachten/gebruiker/';
  readonly OPDRACHT_URL;


  constructor(private http: HttpClient) {
  }


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  isLoggedIn$: Observable<any> = Observable.create(
    function(obs){
      obs.next(JSON.parse(localStorage.getItem('gebruiker')));
    }
  );

  gebruiker: any;
  gebruiker$;
  opdracht$;


  login(body:any){
    this.gebruiker$ = this.http.post<any>(this.LOGIN_URL, body, this.httpOptions);
    this.gebruiker$.subscribe(val=>{
      this.gebruiker = (val);
      localStorage.setItem('gebruiker', JSON.stringify(this.gebruiker));
    });
  }

  getOpdrachtByOpdrachtId(id): Observable<any> {
    return this.http.get<any>(this.GEBRUIKER_URL);
  }

  getOpdrachtByGebruikerdId(): Observable<any> {
    this.isLoggedIn$.subscribe(val=>{
      console.log(val);
      let id = val._id;
      this.opdracht$ = this.http.get<any>(this.VOLTOOIDEOPDRACHT_URL +id);
    });
    return this.opdracht$;
  }


  getGebruikerById(id): Observable<any> {
    return this.http.get<any>(this.GEBRUIKER_URL+id);
  }

  voegPuntenToe(gebruikerId, opdrachtId){
  this.http.get<any>("http://localhost:3000/Opdrachten/" + opdrachtId).subscribe(val=>{
    let punten = val.punten;
       this.http.get<any>(this.GEBRUIKER_URL+gebruikerId).subscribe(val =>{
         val.behaaldePunten += punten;
         this.http.patch<any>(this.GEBRUIKER_URL+gebruikerId, val).subscribe();
       });
     });
    };
}
