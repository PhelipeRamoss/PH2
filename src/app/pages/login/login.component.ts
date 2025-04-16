import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';  // Importação do CommonModule
import { MatCardModule } from '@angular/material/card';  // Importação do MatCardModule
import { MatFormFieldModule } from '@angular/material/form-field';  // Importação do MatFormFieldModule
import { MatInputModule } from '@angular/material/input';  // Importação do MatInputModule
import { ReactiveFormsModule } from '@angular/forms';  // Importação do ReactiveFormsModule

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule  // Importando ReactiveFormsModule
  ],
})
export class LoginComponent implements OnInit {
  loginForm: any;

  constructor(
    private fb: FormBuilder,
    @Inject(AuthService) private authService: AuthService  // Usando @Inject explicitamente
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, senha } = this.loginForm.value;
      this.authService.login(email, senha);
    }
  }
}
