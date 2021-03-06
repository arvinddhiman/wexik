import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../material.module';
import { SubmitArticleComponent } from './submit-article.component';

const routes = [
  {
    path     : '',
    component: SubmitArticleComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SubmitArticleComponent]
})
export class SubmitArticleModule { }
