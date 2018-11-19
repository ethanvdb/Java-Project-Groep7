import { Component, OnInit } from '@angular/core';
import { AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  constructor(private Auth: AuthService ) { }

  ngOnInit() {
  }
  loginUser(event) {
    event.preventDefault();
    const target = event.target;
    const username = target.querySelector('#gebruikersnaam').value;
    const paswoord = target.querySelector('#paswoord').value;

    this.Auth.getUserDetails(username, paswoord);
    console.log(username, paswoord);

  }

}
