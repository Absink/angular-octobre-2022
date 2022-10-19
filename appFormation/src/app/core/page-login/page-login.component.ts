import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BtnI } from 'src/app/shared/interfaces/btn-i';
import { User } from 'src/app/shared/models/user.model';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent implements OnInit {

  public user = new User();
  public form!: FormGroup;
  public btnLogin: BtnI = { label: "Se connecter", action: true };

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private router: Router
    ) { }


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      login: [this.user.login ],
      password: [this.user.password ],
    });
  }

  public login(): void {
    this.usersService.login(this.form.value['login'], this.form.value['password']).subscribe(
      data => {
        sessionStorage.setItem('userId', data.id!.toString());
        this.router.navigateByUrl('/home');
      });

  }

}
