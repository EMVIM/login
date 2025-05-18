import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonComponent } from '../button/button.component';

interface LoginForm {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
  remember: FormControl<boolean | null>;
}

@Component({
  selector: 'app-login-form',
  imports: [ButtonComponent, ReactiveFormsModule, ButtonComponent],
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent {
  loginForm!: FormGroup<LoginForm>;
  showPassword = false;

  constructor() {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.loginForm = new FormGroup<LoginForm>({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email],
        nonNullable: false,
      }),
      password: new FormControl('', {
        validators: [Validators.required, Validators.minLength(6)],
        nonNullable: false,
      }),
      remember: new FormControl(false),
    });
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    // Simulación de una solicitud de API
    console.log('Form submitted:', this.loginForm.value);
  }

  onGoogleLogin($event: any): void {
    console.log('Google login initiated', $event);
    // Implementar lógica de login con Google
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
