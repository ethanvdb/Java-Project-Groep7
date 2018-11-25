import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoltooideOpdrachtenService {

  readonly GET_ALL_URL = "http://localhost:3000/voltooideOpdrachten/goedkeuren/0";
  readonly ACCEPT_URL = "http://localhost:3000/voltooideOpdrachten/goedkeuren/";
  readonly REJECT_URL = "http://localhost:3000/voltooideOpdrachten/";

  constructor(private http: HttpClient) { }


  getAll(): Observable<any> {
    return this.http.get<any>(this.GET_ALL_URL);
  }

  opdrachtGoedkeuren(id): Observable<any>{
    return this.http.patch<any>(this.ACCEPT_URL + id, null);
  }

  opdrachtAfwijzen(id): Observable<any>{
    return this.http.delete<any>(this.REJECT_URL + id);
  }
}
