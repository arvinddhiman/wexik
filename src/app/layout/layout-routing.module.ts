import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
							{
						        path        : 'dashboard',
								loadChildren: './dashboard/dashboard.module#DashboardModule'
						    },
							{
								path        : 'submit-article',
								loadChildren: './submit-article/submit-article.module#SubmitArticleModule'
							}
					];

@NgModule({
  declarations: [],
  imports: [
  				RouterModule.forChild(routes)
  			],
  exports: [	
  				RouterModule
  			]
})
export class LayoutRoutingModule { }
