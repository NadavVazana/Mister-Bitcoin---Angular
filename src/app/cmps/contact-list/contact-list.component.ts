import { Contact } from './../../models/contact.model';
import { ContactService } from './../../services/contact.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  constructor(
    private contactService:ContactService
  ) { }

  filterBy = {term:''}



  filter(){
    this.loadContacts()
    
  }

  loadContacts(){
    this.contactService.loadContacts(this.filterBy)
  }

  contacts!: Contact[]

  ngOnInit(): void {
    this.loadContacts()
    this.contactService.contacts$.subscribe(contacts=> this.contacts = contacts
    
    )
  }

}
