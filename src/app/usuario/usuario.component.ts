import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})

export class UsuarioComponent implements OnInit {
  
  @Input() 
  nome: string;
  
  constructor() { 

  }

  ngOnInit() {
    this.nome = 'Teste';
  }

}
