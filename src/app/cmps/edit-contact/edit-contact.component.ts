import { ContactService } from './../../services/contact.service';
import { Contact } from './../../models/contact.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,
    private contactService:ContactService) { }
contact!:Contact

    editContact(){
      this.contactService.saveContact(this.contact)
      this.router.navigate(['contacts',this.contact._id])
    }
  ngOnInit(): void {
    this.route.data.subscribe(data => {
      const contact = data['contact']
      this.contact = contact
    })

    
  }

}
