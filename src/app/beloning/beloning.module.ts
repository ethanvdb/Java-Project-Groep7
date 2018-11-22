import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeloningComponent } from './beloning.component';
import { FormsModule }   from '@angular/forms';
import { UpdateBeloningComponent } from './update-beloning/update-beloning.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [BeloningComponent, UpdateBeloningComponent]
})
export class BeloningModule { }
