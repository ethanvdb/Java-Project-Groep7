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

  readonly OPDRACHT_URL = 'http://localhost:3000/opdrachten';

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

  addOpdracht(opdracht){
    return this.http.post<any>(this.OPDRACHT_URL, opdracht, this.httpOptions);
  }

  deleteOpdracht(_id){
    const DELETE_URL = this.OPDRACHT_URL + "/" + _id.toString();
    return this.http.delete<any>(DELETE_URL);
  }
}
