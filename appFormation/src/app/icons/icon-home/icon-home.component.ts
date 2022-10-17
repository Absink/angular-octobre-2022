import { Component, OnInit } from '@angular/core';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-home',
  templateUrl: './icon-home.component.html',
  styleUrls: ['./icon-home.component.scss']
})
export class IconHomeComponent implements OnInit {

  public home = faHouse;

  constructor() { }

  ngOnInit(): void {
  }

}
