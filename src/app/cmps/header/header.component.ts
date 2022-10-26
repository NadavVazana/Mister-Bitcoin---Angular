import { User } from './../../models/user';
import { UserService } from './../../services/user.service';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(private userService:UserService,private router:Router,private cd: ChangeDetectorRef) { }
  user!:User

  signOut(){
    this.userService.signout()
    this.router.navigate(['login'])


  }

  ngOnInit(): void {
    
    this.userService.user$.subscribe((user:User | null)=>{
      this.user = user!
    })

  }

}
