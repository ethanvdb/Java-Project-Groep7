import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {BeloningenService} from '../services/beloningen.service';
import {OpdrachtenService} from '../services/opdrachten.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-opdracht',
  templateUrl: './opdracht.component.html',
  styles: [],
  providers: [BeloningenService]
})
export class OpdrachtComponent implements OnInit {

  totalOpdrachten;
  opdrachten$: Observable<any>;

  opdracht = {
    uitleg: '',
    punten: ''
  };

  constructor(private opdrachtService: OpdrachtenService, private router: Router) { }

  ngOnInit() {
    this.haalOpdrachtenOp();
  }

  addOpdracht(form) {
    this.opdrachtService.addOpdracht(form).subscribe(value => console.log(value));
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

  updateOpdracht(id) {
    this.router.navigate(['/updateOpdracht/' + id]);
    this.haalOpdrachtenOp();
  }

  verwijderOpdracht(id) {
    if (confirm('Ben je zeker?')) {
      this.opdrachtService.verwijderOpdracht(id);
      this.haalOpdrachtenOp();
    }
  }
}
