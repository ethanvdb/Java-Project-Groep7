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



  constructor(private gebruikerService: GebruikerService) {
    this.gebruikerService.isLoggedIn$.subscribe(value=>{
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
