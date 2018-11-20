import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {GebruikerService} from '../services/gebruiker.service';

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
    this.opdrachten$ =
    this.voltooideOpdrachten$ = this.gebruikerService.getOpdrachtByGebruikerdId();
    this.user$ = this.gebruikerService.getGebruikerById();
    console.log(this.user$);
  }

}
