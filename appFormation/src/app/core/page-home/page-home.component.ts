import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss']
})
export class PageHomeComponent implements OnInit {

  public title: string = "Bienvenue dans la page d'accueil";
  public infos: string | undefined;
  public display: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public info(): void {
    this.display = !this.display;
    if(this.display)
      this.infos = "Id du user connecté:" + sessionStorage.getItem('userId');
    else
      this.infos = undefined;
  }

}
