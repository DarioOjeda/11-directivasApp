import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
    .hidden {
      display: none; 
    }
  `]
})
export class AgregarComponent implements OnInit {

  texto1: string = 'Cabesa';
  color: string = 'green';

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', Validators.required ]
  });

  tieneError( campo: string ): boolean {
    return (this.miFormulario.get(campo)?.invalid &&  this.miFormulario.get(campo)?.touched) || false;
  }

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  cambiarNombre() {
    this.texto1 = Math.random().toString();
  }

  cambiarColor() {
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.color = color;
  }

}
