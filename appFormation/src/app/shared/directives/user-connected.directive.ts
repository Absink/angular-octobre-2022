import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appUserConnected]'
})
export class UserConnectedDirective implements OnChanges {

  @Input() appUserConnected!: number;
  @HostBinding('class') className!: string;

  ngOnChanges(): void {
    if (this.appUserConnected == Number(sessionStorage.getItem('userId')))
      this.className = `userConnected`;
  }
}
