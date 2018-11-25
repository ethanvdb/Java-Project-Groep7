import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpdrachtComponent} from './opdracht/opdracht.component';
import { HistoriekComponent } from './historiek/historiek.component';
import { BeloningComponent} from './beloning/beloning.component';
import { UpdateBeloningComponent} from './beloning/update-beloning/update-beloning.component';
import { UpdateOpdrachtComponent } from './opdracht/update-opdracht/update-opdracht.component';

import {LoginComponent} from './login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'opdracht', component: OpdrachtComponent},
  {path: 'historiek', component: HistoriekComponent},
  {path: 'beloning', component: BeloningComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'updateBeloning/:id', component: UpdateBeloningComponent},
  {path: 'updateOpdracht/:id', component: UpdateOpdrachtComponent},

  {path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
