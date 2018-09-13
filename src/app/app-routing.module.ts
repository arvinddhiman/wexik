import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LayoutModule } from './layout/layout.module';
import { MaterialModule } from './material.module';

const routes: Routes = [
							{
						        path        : '',
						        component   : HomeComponent
						    },
						    {
						    	path        : 'register',
								loadChildren: './register/register.module#RegisterModule'
						    },
							{
								path        : 'login',
								loadChildren: './login/login.module#LoginModule'
							}

					];

@NgModule({
  declarations: [
  					HomeComponent,
  				],
  imports: [
  				RouterModule.forRoot(routes),
  				MaterialModule,
	  			LayoutModule
  			],
  exports: [	
  				RouterModule,
  				MaterialModule
  			]
})
export class AppRoutingModule { }
