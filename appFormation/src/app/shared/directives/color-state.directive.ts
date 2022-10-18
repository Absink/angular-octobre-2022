import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appColorState]'
})
export class ColorStateDirective implements OnChanges {

  @Input() appColorState!: string;
  @HostBinding('class') className!: string;

  ngOnChanges(): void {
    this.className = `state-${this.appColorState.toLowerCase()}`;
  }
}
