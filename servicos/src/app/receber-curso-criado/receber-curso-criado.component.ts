import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-receber-curso-criado',
  templateUrl: './receber-curso-criado.component.html',
  styleUrls: ['./receber-curso-criado.component.css']
})
export class ReceberCursoCriadoComponent implements OnInit {

  constructor(private cursosService: CursosService) { }

  curso : string;


  ngOnInit(): void {
    this.cursosService.emitirCursoCriado.subscribe(
      cursoCriado => this.curso = cursoCriado
    );
  }

}
