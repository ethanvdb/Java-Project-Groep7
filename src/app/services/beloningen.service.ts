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
export class BeloningenService {

  readonly BELONING_URL = 'http://localhost:3000/beloningen';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(private http: HttpClient) {
  }

  getBeloningen(): Observable<any> {
    return this.http.get<any>(this.BELONING_URL);
  }

  addBeloning(beloning){
    return this.http.post<any>(this.BELONING_URL, beloning, this.httpOptions);
  }
}
