import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {share} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class OpdrachtenService {

  readonly OPDRACHT_URL = 'http://localhost:3000/opdrachten/';
  readonly VOLTOOIDEOPDRACHT_URL = 'http://localhost:3000/voltooideOpdrachten';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(private http: HttpClient) {
  }

  getOpdrachten(): Observable<any> {
    return this.http.get<any>(this.OPDRACHT_URL);
  }

  getOpdracht(id) {
    console.log(this.OPDRACHT_URL + id);
    return this.http.get<any>(this.OPDRACHT_URL + id);
  }

  addOpdracht(opdracht) {
    return this.http.post<any>(this.OPDRACHT_URL, opdracht, this.httpOptions);
  }

  addVoltooideOpdracht(voltooideOpdracht) {
    return this.http.post<any>(this.VOLTOOIDEOPDRACHT_URL, voltooideOpdracht, this.httpOptions);
  }

  updateOpdracht(opdracht, id) {
    return this.http.patch<any>(this.OPDRACHT_URL + id, opdracht, this.httpOptions);
  }

  verwijderOpdracht(opdracht) {
    console.log(this.OPDRACHT_URL + opdracht);
    return this.http.delete<any>(this.OPDRACHT_URL + opdracht, this.httpOptions);
  }
}
