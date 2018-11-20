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

  constructor(private beloginService: BeloningenService) { }

  ngOnInit() {
    this.beloginService.getBeloningen().subscribe(response => this.totalBeloningen);
  }

}
