import { UserService } from './../../services/user.service';
import { ContactService } from './../../services/contact.service';
import { Contact } from './../../models/contact.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router,
    private userService:UserService
    ) { }

  contact! : Contact
  paramsSubscription!: Subscription
  transferAmount!:number

  getUserImage(userId:any){
    return `https://robohash.org/${userId}.png?set=set4`
  }

  transfer(){
    
    this.userService.transfer(this.transferAmount,this.contact)
    this.router.navigate([''])
  }

  async ngOnInit(){
    this.paramsSubscription = this.route.data.subscribe(data=>{
      const contact = data['contact']
      this.contact = contact
      
    })

  
  

}

}
