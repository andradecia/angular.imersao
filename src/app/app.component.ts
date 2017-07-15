import { Component } from '@angular/core';

export class Usuario {
  id: number;
  nome: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: Date;
  title = 'AgitagendA';
  usuario: Usuario = {
    nome: 'Rodrigo',
    id: 5
  }
  constructor() {
    this.data = new Date();
  }
}