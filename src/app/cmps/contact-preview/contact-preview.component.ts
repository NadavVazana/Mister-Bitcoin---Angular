import { ContactService } from './../../services/contact.service';
import { Contact } from './../../models/contact.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent implements OnInit {

  constructor(private contactService:ContactService) { }


  @Input() contact!: Contact
  removeContact(){
      this.contactService.deleteContact(this.contact._id!)
  }

  getUserImage(userId:any){
    return `https://robohash.org/${userId}.png?set=set4`
  }

  ngOnInit(): void {
  }

}
