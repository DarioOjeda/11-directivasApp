import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrMsgDirective implements OnInit, OnChanges{

  private _color: string = 'red';
  private _texto: string = 'error in field';
  private _mostrar: boolean = false;

  htmlElement: ElementRef<HTMLElement>;
  
  @Input() set color( valor: string ) {
    this.htmlElement.nativeElement.style.color = valor;
    this._color = valor;
  }
  
  
  @Input() set mensaje( texto: string ){
    this.htmlElement.nativeElement.innerText = texto;
    this._texto = texto;
  }  

  @Input() set valido( valor: boolean ){
    if( !valor ) {
      this.htmlElement.nativeElement.classList.add('hidden');
    } else {
      this.htmlElement.nativeElement.classList.remove('hidden');
    }
    this._mostrar = valor;
  }  

  constructor( private el: ElementRef<HTMLElement> ) { 
    this.htmlElement = el;
  }
  ngOnChanges(changes: SimpleChanges): void {
    // if(changes.mensaje) {
    //   const mensaje = changes.mensaje.currentValue;
    //   this.htmlElement.nativeElement.innerText = mensaje;
    // }

    // if( changes.color ) {
    //   const color = changes.color.currentValue;
    //   this.htmlElement.nativeElement.style.color = color;
    // }
  }
  ngOnInit(): void {
    // console.log('NgOnInit en la directiva');
    // this.setColor();
    // this.setMensaje();
    this.setClass();
  }
  setClass() {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  // setColor(): void {
  //   this.htmlElement.nativeElement.style.color = this.color;
  // }

  // setMensaje(): void {
  //   this.htmlElement.nativeElement.innerText = this.mensaje;
  // }

}
