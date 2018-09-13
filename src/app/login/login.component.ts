import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoaderService } from '../services/loader.service';
import { CommonService } from '../services/common.service';
import { MatSnackBar } from '@angular/material';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hidePassword = true;
  loginForm: FormGroup;
  constructor(
      private formBuilder: FormBuilder,
      private loaderService: LoaderService,
      private service: CommonService,
      public snackBar: MatSnackBar,
      private router: Router
  ) { }

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
            username : ['', [Validators.required, Validators.minLength(6)]],
            password : ['', Validators.required]
      });
  }

  login(post) {
    this.loaderService.display(true);
    const formData = {
              username: post.username,
              password: post.password
    };

    this.service.post("login", formData).subscribe(
        res => {
          this.loaderService.display(false);
          if (res['success']){
              this.router.navigate(['/dashboard']);
          }else {
              this.snackBar.open(res['msg'], 'OK', {
                  verticalPosition: 'top',
                  duration        : 3000
              });
          }
          console.log(res);
        });
  }

}
