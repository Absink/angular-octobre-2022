import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appColorDay]'
})
export class ColorDayDirective implements OnChanges {

  @Input() appColorDay!: number;
  @HostBinding('class') className!: string;

  ngOnChanges(): void {
    if (this.appColorDay <= 3)
      this.className = 'day';
    else
      this.className = 'days';
  }

}
