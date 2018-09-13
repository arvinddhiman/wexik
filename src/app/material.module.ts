import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { 
	MatButtonModule, 
	MatToolbarModule,
	MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatSnackBarModule
} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
  	FlexLayoutModule,
  	MatButtonModule, 
  	MatToolbarModule, 
  	MatGridListModule,
  	MatCardModule,
  	MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule
  	],

  exports: [
    CommonModule,
  	FlexLayoutModule,
  	MatButtonModule, 
  	MatToolbarModule, 
  	MatGridListModule,
  	MatCardModule,
  	MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule
  	],
})
export class MaterialModule { }