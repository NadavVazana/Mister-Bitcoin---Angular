import { User } from './../../models/user';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private userService:UserService) { }
  user! :any
  ngOnInit(): void {
    this.userService.getLoggedInUser().subscribe(user=>{

      this.user = JSON.parse(user)
      
      

      
    })
    

  }

}
