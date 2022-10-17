import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthentGuard implements CanActivate {
  canActivate(): boolean {
    if (sessionStorage.getItem('userId') != null) {
      return true;
    }
    return false;
  }

}
