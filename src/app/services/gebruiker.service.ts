import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {share} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GebruikerService {

  readonly GEBRUIKER_URL = 'http://localhost:3000/gebruikers/5bf3cd92ecdb7c0f707c9ce1';
  readonly VOLTOOIDEOPDRACHT_ULR = 'http://localhost:3000/voltooideOpdrachten/gebruiker/5bf3cd92ecdb7c0f707c9ce1';
  readonly OPDRACHT_URL;

  constructor(private http: HttpClient) {
  }


  getOpdrachtByOpdrachtId(): Observable<any> {
    return this.http.get<any>(this.OPDRACHT_URL);
  }
  getOpdrachtByGebruikerdId(): Observable<any> {
    return this.http.get<any>(this.VOLTOOIDEOPDRACHT_ULR);
  }
  getGebruikerById(): Observable<any> {
    return this.http.get<any>(this.GEBRUIKER_URL);
  }
}
