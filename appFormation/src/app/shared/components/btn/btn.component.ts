import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BtnI } from '../../interfaces/btn-i';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss']
})
export class BtnComponent {

  @Input() btn!: BtnI;
  @Output() clicked: EventEmitter<any> = new EventEmitter();

  public doAction(): void {
    this.clicked.emit();
  }

}
