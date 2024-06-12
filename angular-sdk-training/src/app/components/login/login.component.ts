import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8)
  ]);
  constructor(
    private router: Router,
    private appService: AppService
  ) { }

  ngOnInit(): void {
  }

  login(): void{
    // window['ue'].setUserIdentifier(this.emailFormControl.value);
    this.appService.setID(this.emailFormControl.value, {});
    this.router.navigate(['/home']);
  }
}
