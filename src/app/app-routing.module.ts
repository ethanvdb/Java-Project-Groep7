import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpdrachtComponent} from './opdracht/opdracht.component';
import {HistoriekComponent} from './historiek/historiek.component';
import { BeloningComponent} from './beloning/beloning.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {path: 'opdracht', component: OpdrachtComponent},
  {path: 'historiek', component: HistoriekComponent},
  {path: 'beloning', component: BeloningComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
