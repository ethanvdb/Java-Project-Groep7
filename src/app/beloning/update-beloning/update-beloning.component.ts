import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {BeloningenService} from '../../services/beloningen.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-update-beloning',
  templateUrl: './update-beloning.component.html',
  styleUrls: ['./update-beloning.component.scss']
})
export class UpdateBeloningComponent implements OnInit {

  constructor(private route: ActivatedRoute, private beloningService: BeloningenService, private router: Router) { }
  id: string;
  beloning: object;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    console.log(this.id);
    this.beloningService.getBeloning(this.id).then(data => this.beloning = data);
    console.log(this.beloning);
  }

  addBeloning(form) {
    this.beloningService.updateBeloning(form, this.id).subscribe(value => console.log(value));
    this.router.navigate(['beloning']);
  }

}
