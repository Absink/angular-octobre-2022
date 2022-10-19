import { Component, OnInit } from '@angular/core';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { RoleUser } from 'src/app/shared/enums/role-user';
import { BtnI } from 'src/app/shared/interfaces/btn-i';
import { User } from 'src/app/shared/models/user.model';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-page-list-users',
  templateUrl: './page-list-users.component.html',
  styleUrls: ['./page-list-users.component.scss']
})
export class PageListUsersComponent implements OnInit {

  public users: User[] = [];
  public tabHeaders: string[] = ['ID', 'Login', 'Der. Connexion', 'Role'];
  public btnSwitch: BtnI = { label: 'Switch', action: true };
  public btnAdd: BtnI = { label: 'Add', route: 'add' };
  public viewCard: boolean = false;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getById(Number(sessionStorage.getItem('userId')))
      .subscribe(userConnected => {
        if (userConnected.role == RoleUser.ADMIN)
          this.usersService.getAll().subscribe(datas => this.users = datas);
        else
          this.usersService.getAll().subscribe(datas => this.users = datas.filter(u => u.role == RoleUser.USER))
      });
  }

  public switchView(): void {
    this.viewCard = !this.viewCard;
  }

}
