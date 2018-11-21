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


  constructor(private beloningService: BeloningenService) { }

  ngOnInit() {
    this.users$ = this.beloningService.getBeloningen();
    this.beloningService.getBeloningen().subscribe(response => this.totalBeloningen = (response));
    console.log(this.totalBeloningen);
  }
x
}
