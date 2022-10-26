import { Contact } from './../models/contact.model';
import { User } from './../models/user';
import { of, throwError, BehaviorSubject } from 'rxjs';
import { ContactService } from './contact.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  private _user$ = new BehaviorSubject<User | null>(null)
    public user$ = this._user$.asObservable()


  signout(){
    localStorage.setItem('loggedInUser','')
    this._user$.next(null)
  }

  login(username:string){
    let user = localStorage.getItem(username)
    let loggedInUser = localStorage.getItem('loggedInUser')
    if(user){
      if(user === loggedInUser) {
        this._user$.next(JSON.parse(user))
      }
      else{
        localStorage.setItem('loggedInUser',user)
        this._user$.next(JSON.parse(user))

      }
      
      
      
      
    }
    else{
      let newUser :User = {username,balance:100,moves:[]}
      localStorage.setItem(newUser.username,JSON.stringify(newUser))
      localStorage.setItem('loggedInUser',JSON.stringify(newUser))
      this._user$.next(newUser)
    }
    
  }
  
  getLoggedInUser(){
    let user = localStorage.getItem('loggedInUser')
    if(user){

      
      return of(user)
    }
    else{
      return of()
    }
    
  }

  transfer(coins:number,to:Contact ){
      this.getLoggedInUser().subscribe(user=>{
        let loggedInUser = JSON.parse(user)
        if(loggedInUser.balance - coins >= 0){
          loggedInUser.balance = loggedInUser.balance - coins
          loggedInUser.moves.push({to:to.name,transfer:coins})
          localStorage.setItem('loggedInUser',JSON.stringify(loggedInUser))
          localStorage.setItem(loggedInUser.username,JSON.stringify(loggedInUser))
          
        }

        
      })

    
  }

}



