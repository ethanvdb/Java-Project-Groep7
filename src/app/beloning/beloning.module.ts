import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeloningComponent } from './beloning.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [BeloningComponent]
})
export class BeloningModule { }
