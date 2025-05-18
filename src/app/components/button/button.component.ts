import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  //Inputs principales
  text = input<string>(''); // texto del boton
  type = input<'button' | 'submit'>('button'); // tipo del botton

  //Opciones de estilo
  buttonStyle = input<'primary' | 'secondary' | 'social'>('primary'); // estilo del botton
  isFullWidth = input<boolean>(false); // si ocupa todo el ancho

  //Opciones de imagen/icono
  altText = input<string>(''); //texto alternativo
  iconClass = input<string | null>(null);
  imgSrc = input<string | null>(null);

  //Estados del botton
  isDisabled = input<boolean>(false); // si el boton esta desabilitado

  //Evento de click
  buttonClick = output<Event>(); // Evento emitido al hacer click

  onClick(event: Event) {
    if (!this.isDisabled()) {
      this.buttonClick.emit(event);
    }
  }

  getButtonClasses(): string {
    const classes = ['button'];

    if (this.buttonStyle() === 'primary') classes.push('button--primary');
    if (this.buttonStyle() === 'secondary') classes.push('button--secondary');
    if (this.buttonStyle() == 'social') classes.push('social-button');

    if (this.isFullWidth()) classes.push('button--full');
    if (this.isDisabled()) classes.push('button--disabled');

    return classes.join(' ');
  }
}
