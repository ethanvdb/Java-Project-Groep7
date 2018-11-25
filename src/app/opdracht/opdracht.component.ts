import { Component, OnInit } from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {BeloningenService} from '../services/beloningen.service';
import {OpdrachtenService} from '../services/opdrachten.service';
import { Router } from '@angular/router';
import { GebruikerService} from '../services/gebruiker.service';


@Component({
  selector: 'app-opdracht',
  templateUrl: './opdracht.component.html',
  styles: [],
  providers: [BeloningenService]
})
export class OpdrachtComponent implements OnInit {

  totalOpdrachten;
  opdrachten$: Observable<any>;
  user$;
  opdracht = {
    uitleg: '',
    punten: ''
  };
  voltooideOpdracht = {
    opdrachtId: '',
    gebruikerId: '',
    uitleg: '',
    goedgekeurd: '0'
  };



  constructor(private opdrachtService: OpdrachtenService, private router: Router, private gebruikerService: GebruikerService) {
    this.user$ = this.gebruikerService.isLoggedIn$;
    this.user$.subscribe();
  }

  ngOnInit() {
    this.haalOpdrachtenOp();
  }


  addOpdracht(form) {
    this.opdrachtService.addOpdracht(form).subscribe(value => console.log(value));
    this.haalOpdrachtenOp();
  }

  addVoltooideOpdracht(form) {
    console.log(form);
    this.opdrachtService.addVoltooideOpdracht(form).subscribe(value => console.log(value));
    this.haalOpdrachtenOp();
  }

  verwijderOpdracht(id) {
    if (confirm('Ben je zeker?')) {
      this.opdrachtService.verwijderOpdracht(id).subscribe();
      this.haalOpdrachtenOp();
    }
  }

  updateOpdracht(id) {
    this.router.navigate(['/updateOpdracht/' + id]);
    this.haalOpdrachtenOp();
  }


  haalOpdrachtenOp() {
    this.opdrachten$ = this.opdrachtService.getOpdrachten();
    this.opdrachtService.getOpdrachten().subscribe(response => this.totalOpdrachten = (response));
    this.opdracht = {
      uitleg: '',
      punten: ''
    };
  }

}
