import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {BeloningenService} from '../services/beloningen.service';
import {GebruikerService} from '../services/gebruiker.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-beloning',
  templateUrl: './beloning.component.html',
  styles: [],
  providers: [BeloningenService]
})
export class BeloningComponent implements OnInit {

  totalBeloningen;
  isLoggedIn: false;
  beloningen$: Observable<any>;
  user$;

  beloning = {
    naam: '',
    aantalPunten: ''
  };


  constructor(private beloningService: BeloningenService, private router: Router, private gebruikerService: GebruikerService) {
    this.user$ = this.gebruikerService.isLoggedIn$;
    this.user$.subscribe();
  }

  ngOnInit() {
    this.haalBeloningenOp();
  }

  addBeloning(form) {
    this.beloningService.addBeloning(form).subscribe(value => console.log(value));
    this.haalBeloningenOp();
  }

  verwijderBeloning(id) {
    if (confirm('Ben je zeker?')) {
      this.beloningService.verwijderBeloning(id);
      this.haalBeloningenOp();
    }
  }

  updateBeloning(id) {
      this.router.navigate(['/updateBeloning/' + id]);
      this.haalBeloningenOp();
  }

  haalBeloningenOp() {
    this.beloningen$ = this.beloningService.getBeloningen();
    this.beloningService.getBeloningen().subscribe(response => this.totalBeloningen = (response));

    this.beloning = {
      naam: '',
      aantalPunten: ''
    };
  }

  beloningKopen(beloningPunten){
    this.user$.subscribe(val=>{
      let id = val._id;
      let punten = val.punten;
      if(punten >= beloningPunten){
        console.log(id);
        this.gebruikerService.koopOpdracht(id, beloningPunten);
      }
    });
  }
}
