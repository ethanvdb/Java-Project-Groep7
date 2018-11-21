import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {BeloningenService} from '../services/beloningen.service';

@Component({
  selector: 'app-beloning',
  templateUrl: './beloning.component.html',
  styles: [],
  providers: [BeloningenService]
})
export class BeloningComponent implements OnInit {

  totalBeloningen;
  users$: Observable<any>;
  beloning = {
<<<<<<< HEAD
    uitleg: '',
    punten: ''
  };
=======
    naam: '',
    aantalPunten: ''
  };

>>>>>>> beloning post request

  constructor(private beloningService: BeloningenService) { }

  ngOnInit() {
    this.haalBeloningenOp();
  }

  addBeloning(form){
    this.beloningService.addBeloning(form).subscribe(value=>console.log(value));
    this.haalBeloningenOp();
  }

  haalBeloningenOp(){
    this.users$ = this.beloningService.getBeloningen();
    this.beloningService.getBeloningen().subscribe(response => this.totalBeloningen = (response));

    this.beloning = {
      naam: '',
      aantalPunten: ''
    };
  }
}
