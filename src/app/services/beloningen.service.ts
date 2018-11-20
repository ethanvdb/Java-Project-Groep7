import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {share} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BeloningenService {

  readonly BELONING_URL = 'http://localhost:3000/beloningen';

  constructor(private http: HttpClient) {
  }

  getBeloningen(): Observable<any> {
    return this.http.get<any>(this.BELONING_URL);
  }
}
