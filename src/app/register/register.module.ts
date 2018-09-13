import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { RegisterComponent } from './register.component';

const routes = [
  {
    path     : '',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ RegisterComponent ]
})
export class RegisterModule { }
