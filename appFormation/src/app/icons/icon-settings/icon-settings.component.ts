import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faGear } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-settings',
  templateUrl: './icon-settings.component.html',
  styleUrls: ['./icon-settings.component.scss']
})
export class IconSettingsComponent {

  public settings = faGear;

  constructor(private router: Router) { }

  public goSettings(): void {
    this.router.navigateByUrl('/settings/myAccount');
  }

}
