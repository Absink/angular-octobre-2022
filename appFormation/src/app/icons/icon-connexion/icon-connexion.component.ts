import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-connexion',
  templateUrl: './icon-connexion.component.html',
  styleUrls: ['./icon-connexion.component.scss']
})
export class IconConnexionComponent implements OnInit {

  public power = faPowerOff;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public logout(): void {
    sessionStorage.removeItem('userId');
    this.router.navigateByUrl('/login');
  }

}
