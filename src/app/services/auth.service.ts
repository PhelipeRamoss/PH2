import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private autenticado = false;

  constructor(private router: Router) {}

  login(email: string, senha: string) {
    // Lógica de autenticação (exemplo simplificado)
    if (email === 'usuario@example.com' && senha === 'senha123') {
      this.autenticado = true;
      this.router.navigate(['/livros']);
    } else {
      alert('Credenciais inválidas');
    }
  }

  logout() {
    this.autenticado = false;
    this.router.navigate(['/login']);
  }

  isAutenticado(): boolean {
    return this.autenticado;
  }
}
