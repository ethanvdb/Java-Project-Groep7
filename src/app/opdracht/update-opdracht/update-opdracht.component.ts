import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OpdrachtenService } from '../../services/opdrachten.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-update-opdracht',
  templateUrl: './update-opdracht.component.html',
  styleUrls: ['./update-opdracht.component.scss']
})
export class UpdateOpdrachtComponent implements OnInit {

  constructor(private route: ActivatedRoute, private opdrachtService: OpdrachtenService, private router: Router) { }
  id: string;
  opdracht: object;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    console.log(this.id);
    this.opdrachtService.getOpdracht(this.id).then(data => this.opdracht = data);
  }

  addOpdracht(form) {
    this.opdrachtService.updateOpdracht(form, this.id).subscribe(value => console.log(value));
    this.router.navigate(['opdracht']);
  }
}
