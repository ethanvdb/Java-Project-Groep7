import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {GebruikerService} from '../services/gebruiker.service';
import {map, tap} from 'rxjs/operators';
import {delay} from 'q';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-historiek',
  templateUrl: './historiek.component.html',
  styles: [],
  providers: [GebruikerService]
})
export class HistoriekComponent implements OnInit {

  user$;
  voltooideOpdrachten$;
  opdrachten$;


  constructor(private gebruikerService: GebruikerService ) { }

  ngOnInit() {
    this.voltooideOpdrachten$ = this.gebruikerService.getOpdrachtByGebruikerdId();
    // this.voltooideOpdrachten$.map(response => {
    //   this.opdrachten$.append(this.gebruikerService.getOpdrachtByOpdrachtId(response.opdrachtId));
    // });
    this.user$ = this.gebruikerService.getGebruikerById();
    console.log(this.user$);
  }

}
