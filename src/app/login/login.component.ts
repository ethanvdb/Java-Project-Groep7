import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  constructor( private http: HttpClient) { }

  ngOnInit() {
  }
  loginUser(event) {
    event.preventDefault();
    const target = event.target;
    const username = target.querySelector('#gebruikersnaam').value;
    const paswoord = target.querySelector('#paswoord').value;

    console.log(username, paswoord);

  }

}
