import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgBootstrapModule} from './sharedModules/ng-bootstrap.module';
import { NavbarComponent } from './navbar/navbar.component';
import { OpdrachtModule } from './opdracht/opdracht.module';
import { HistoriekModule } from './historiek/historiek.module';
import { BeloningModule } from './beloning/beloning.module';
import { LoginModule } from './login/login.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { GebruikerService } from './gebruiker.service';
import { HomeComponent } from './home/home.component';
import { OpdrachtAanvragenComponent } from './opdracht-aanvragen/opdracht-aanvragen.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    OpdrachtAanvragenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgBootstrapModule,
    OpdrachtModule,
    HistoriekModule,
    BeloningModule,
    LoginModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [GebruikerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
