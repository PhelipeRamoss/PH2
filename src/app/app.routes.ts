/*
import { Routes } from '@angular/router';
import { LivrosComponent } from './pages/livros/livros.component';

export const routes: Routes = [
  {
    path: '',
    component: LivrosComponent
  },
  {
    path: 'sobre',
    loadComponent: () => import('./pages/sobre/sobre.component').then(m => m.SobreComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent)
  }
];
*/

import { Routes } from '@angular/router';
import { LivrosComponent } from './pages/livros/livros.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: LivrosComponent,
    canActivate: [authGuard]
  },
  {
    path: 'sobre',
    loadComponent: () => import('./pages/sobre/sobre.component').then(m => m.SobreComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent)
  }
];
