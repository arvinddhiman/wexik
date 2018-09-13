import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoaderService } from '../services/loader.service';
import { CommonService } from '../services/common.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [ CommonService ]
})

export class RegisterComponent implements OnInit {

  hidePassword = true;
  hideConfirmPassword = true;
  registerForm: FormGroup;
  registerFormErrors: any;
  constructor(
  		private formBuilder: FormBuilder,
        private loaderService: LoaderService,
        private service: CommonService,
        public snackBar: MatSnackBar
  	) { 
  		this.registerFormErrors = {
            f_name         : {},
            l_name         : {},
            username       : {}, 
            email          : {},
            password       : {},
            passwordConfirm: {}
        };
  	  }

  ngOnInit() {
  	this.registerForm = this.formBuilder.group({
            f_name         : ['', Validators.required],
            l_name         : [],
            username       : ['', [Validators.required, Validators.minLength(6)], this.usernameUnique.bind(this)],
            email          : ['', [
                                    Validators.required, 
                                    Validators.email
                                ]
                             ],
            password       : ['', Validators.required],
            passwordConfirm: ['', [Validators.required, confirmPassword]]
        });
  }

  register(post){
      this.loaderService.display(true);
      const formData = {
                f_name: post.f_name,
                l_name: post.l_name,
                email: post.email,
                username: post.username,
                password: post.password
      };

      this.service.post("register", formData).subscribe(
          res => {
              this.loaderService.display(false);
              if(res['success']) {
                  this.registerForm.reset();
                  this.snackBar.open('Register Successfully.', 'OK', {
                      verticalPosition: 'top',
                      duration        : 3000
                  });
              }else{
                  this.snackBar.open('Something Wrong!', 'OK', {
                      verticalPosition: 'top',
                      duration        : 3000
                  });
              }
          });
  }

  usernameUnique(control: FormGroup) {
      const formData = {username: control.value};
      return new Promise((resolve) => {
          this.service.post("register/username", formData).subscribe(
            res => {
                if(res['result'] == 1)
                    resolve({usernameUnique: "This Username is already taken."});
                else
                    resolve(null);
            });
          });
  }

}

function confirmPassword(control: AbstractControl)
{
    if ( !control.parent || !control )
    {
        return;
    }

    const password = control.parent.get('password');
    const passwordConfirm = control.parent.get('passwordConfirm');

    if ( !password || !passwordConfirm )
    {
        return;
    }

    if ( passwordConfirm.value === '' )
    {
        return;
    }

    if ( password.value !== passwordConfirm.value )
    {
        return {
            passwordsNotMatch: true
        };
    }
}
