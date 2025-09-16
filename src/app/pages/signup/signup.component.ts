import { Component } from '@angular/core';
import { DefaultLoginLayoutComponentComponent } from '../../components/default-login-layout-component/default-login-layout-component.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';

interface SignupForm {
  email: FormControl;
  name: FormControl;
  password: FormControl;
  passwordConfirm: FormControl;
}

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    DefaultLoginLayoutComponentComponent,
    ReactiveFormsModule,
    PrimaryInputComponent
  ],
  providers: [LoginService, ToastrService],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})

export class SignupComponent {
  [x: string]: any;
  signupForm!: FormGroup<SignupForm>;
  
  constructor(private router: Router, private loginService: LoginService, private toastService: ToastrService) {
    this.signupForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      name: new FormControl("", [Validators.required, Validators.minLength(3)]),
      password: new FormControl("", [Validators.required, Validators.minLength(6)]),
      passwordConfirm: new FormControl("", [Validators.required, Validators.minLength(6)]),
    });

  }

  submit() {
    this.loginService.login(this.signupForm.value.email, this.signupForm.value.password).subscribe({
      next: () => this.toastService.success("Login feito com sucesso!"),
      error: () => this.toastService.error("Erro inesperado! Por favor, tente novamente.") 
    })
  }

  navigate() {
    this.router.navigate(['/login']);
  }
} 
