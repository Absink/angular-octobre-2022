import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-page-settings',
  templateUrl: './page-settings.component.html',
  styleUrls: ['./page-settings.component.scss']
})
export class PageSettingsComponent implements OnInit {

  public user!: User;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getById(Number(sessionStorage.getItem('userId'))).subscribe(data => this.user = data);
  }

}
