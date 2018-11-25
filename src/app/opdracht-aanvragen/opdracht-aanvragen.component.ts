import { Component, OnInit } from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {BeloningenService} from '../services/beloningen.service';
import {OpdrachtenService} from '../services/opdrachten.service';
import { Router } from '@angular/router';
import {VoltooideOpdrachtenService} from '../services/voltooide-opdrachten.service';
import {GebruikerService} from '../services/gebruiker.service';
import { delay, map, tap } from 'rxjs/operators';


@Component({
  selector: 'app-opdracht-aanvragen',
  templateUrl: './opdracht-aanvragen.component.html',
  styles: [],
  providers: [VoltooideOpdrachtenService, GebruikerService]
})
export class OpdrachtAanvragenComponent implements OnInit {

  voltooideOpdrachten$;



  constructor(private voltooideOpdrachtenService: VoltooideOpdrachtenService, private gebruikerService: GebruikerService, private opdrachtenService: OpdrachtenService) { }

  ngOnInit() {
    this.haalOpdrachtenOp();
  }

  opdrachtAfwijzen(id){
    this.voltooideOpdrachtenService.opdrachtAfwijzen(id).subscribe();
    this.haalOpdrachtenOp();
  }

  opdrachtGoedkeuren(id){
    this.voltooideOpdrachtenService.opdrachtGoedkeuren(id).subscribe();
    this.voltooideOpdrachtenService.getById(id).subscribe(val=>{
      this.gebruikerService.voegPuntenToe(val.gebruikerId, val.opdrachtId);
    });


    this.haalOpdrachtenOp();
  }

  haalOpdrachtenOp(){
    this.voltooideOpdrachten$ = this.voltooideOpdrachtenService.getAll();
    this.voltooideOpdrachten$.subscribe();
  }



}
