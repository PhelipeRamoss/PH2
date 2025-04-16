import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';


interface Livro {
  titulo: string;
  autor: string;
  descricao: string;
  imagem: string;
}

@Component({
  selector: 'app-livros',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent {
  livros: Livro[] = [
    {
      titulo: 'Dom Casmurro',
      autor: 'Machado de Assis',
      descricao: 'Um romance brasileiro clássico sobre amor e ciúmes.',
      imagem: 'assets/imagens/dom-casmurro.jpg'
    },
    {
      titulo: 'Memórias Póstumas de Brás Cubas',
      autor: 'Machado de Assis',
      descricao: 'Narrativa inovadora de um defunto autor.',
      imagem: 'assets/imagens/bras-cubas.jpg'
    }
  ];
}
