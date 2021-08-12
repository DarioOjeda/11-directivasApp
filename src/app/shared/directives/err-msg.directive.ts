import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrMsgDirective implements OnInit, OnChanges{

  htmlElement: ElementRef<HTMLElement>;
  
  @Input() color: string = 'red';
  
  
  @Input() mensaje: string = 'error in field';

  constructor( private el: ElementRef<HTMLElement> ) { 
    this.htmlElement = el;
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes.mensaje) {
      const mensaje = changes.mensaje.currentValue;
      this.htmlElement.nativeElement.innerText = mensaje;
    }

    if( changes.color ) {
      const color = changes.color.currentValue;
      this.htmlElement.nativeElement.style.color = color;
    }
  }
  ngOnInit(): void {
    console.log('NgOnInit en la directiva');
    this.setColor();
    this.setMensaje();
    this.setClass();
  }
  setClass() {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this.color;
  }

  setMensaje(): void {
    this.htmlElement.nativeElement.innerText = this.mensaje;
  }

}
