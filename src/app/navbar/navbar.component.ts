import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {GebruikerService} from "../gebruiker.service";




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {
  isCollapsed = true; // true -> verberg menu, false -> toon menu
  isLoggedIn = false;
  isLoggedIn$: Observable<any> = Observable.create(
    function(obs){
      obs.next(localStorage.getItem('gebruiker'));
    }
  );


  constructor() {
    this.isLoggedIn$.subscribe(value=>{
      console.log(value);
      if(value){
        this.isLoggedIn = true;
      }
    });
  }

  ngOnInit() {
  }

  logout(){
    localStorage.removeItem('gebruiker');
    window.location.reload();
  }


}
