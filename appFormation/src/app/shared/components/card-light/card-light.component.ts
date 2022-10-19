import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-light',
  templateUrl: './card-light.component.html',
  styleUrls: ['./card-light.component.scss']
})
export class CardLightComponent implements OnInit {

  @Input() title!: string;
  @Input() subtitle!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
