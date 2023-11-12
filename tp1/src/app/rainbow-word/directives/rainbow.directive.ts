import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {

  private colors: string[] = ['red', 'blue', 'green', 'yellow', 'purple','orange','indigo'];

  @HostBinding('style.color') textColor: string = '';
  @HostBinding('style.border-color') borderColor: string = '';

  @HostListener('keyup') keyup() {
    const randomIndex = Math.floor(Math.random() * this.colors.length);
    this.textColor = this.colors[randomIndex];
    this.borderColor = this.colors[randomIndex];
  }

}
