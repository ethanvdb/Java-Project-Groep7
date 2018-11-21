import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {GebruikerService} from "../gebruiker.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  isLoggedIn = localStorage.getItem('gebruiker');

  loginForm:FormGroup = new FormGroup({
    naam:new FormControl(null),
    passwoord:new FormControl(null)
  });

  constructor( private http: HttpClient, private _gebruikerService: GebruikerService, private router:Router) { }

  ngOnInit() {
  }


  login(){
    if(!this.loginForm.valid){
      console.log('Invalid');
      return;
    }

    //console.log(JSON.stringify(this.loginForm.value))
    console.log("logged id");

    this._gebruikerService.login(JSON.stringify(this.loginForm.value));
    window.location.reload();
    this.router.navigateByUrl('/beloning');


  }

}
