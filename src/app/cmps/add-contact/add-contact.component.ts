import { Router } from '@angular/router';
import { ContactService } from './../../services/contact.service';
import { Contact } from './../../models/contact.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {

  constructor(private contactService: ContactService, private router: Router) { }

  contact = { name: '', phone: '', email: '' }

  addContact() {
    const user = this.contactService.saveContact(this.contact)
    this.router.navigate([`/contacts`, user!._id])

  }

  ngOnInit(): void {
  }

}
