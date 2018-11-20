import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {share} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OpdrachtenService {

  readonly OPDRACHT_URL = 'http://localhost:3000/opdrachten';

  constructor(private http: HttpClient) {
  }

  getOpdrachten(): Observable<any> {
    return this.http.get<any>(this.OPDRACHT_URL);
  }
}
