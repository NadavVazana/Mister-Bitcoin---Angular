import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService, private route:Router) { }

  username! : string

  login(){
    this.userService.login(this.username)
    this.route.navigate([''])

  }

  ngOnInit(): void {
  }

}
