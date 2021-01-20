import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }

  public authenticate(){
    localStorage.setItem("loggedIn", "true");
    this.router.navigate(['/protected'])
  }

  public isAuthenticated(){
    if(localStorage.getItem("loggedIn") == "true"){
      return true
    }
    return false
  }

  public logout(){
    localStorage.removeItem("loggedIn")
    this.router.navigate(['/login'])
  }
}
