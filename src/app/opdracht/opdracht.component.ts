import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {BeloningenService} from '../services/beloningen.service';
import {OpdrachtenService} from '../services/opdrachten.service';

@Component({
  selector: 'app-opdracht',
  templateUrl: './opdracht.component.html',
  styles: [],
  providers: [BeloningenService]
})
export class OpdrachtComponent implements OnInit {

  totalOpdrachten;
  opdrachten$: Observable<any>;

  constructor(private opdrachtService: OpdrachtenService) { }

  ngOnInit() {
    this.opdrachten$ = this.opdrachtService.getOpdrachten();
    this.opdrachtService.getOpdrachten().subscribe(response => this.totalOpdrachten = (response));
    console.log(this.totalOpdrachten);
  }

}
