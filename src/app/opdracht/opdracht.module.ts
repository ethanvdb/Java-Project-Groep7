import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpdrachtComponent } from './opdracht.component';
import { FormsModule } from '@angular/forms';
import { UpdateOpdrachtComponent } from './update-opdracht/update-opdracht.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [OpdrachtComponent, UpdateOpdrachtComponent]
})
export class OpdrachtModule { }
