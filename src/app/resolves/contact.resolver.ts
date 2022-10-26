import { ContactService } from './../services/contact.service';
import { Contact } from './../models/contact.model';
import { inject, Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactResolver implements Resolve<Observable<void|Contact>> {
  contactService = inject(ContactService)
   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<void|Contact> {
    const id = route.params['id']
    const contact =  this.contactService.getContactById(id)
    return contact;

  }
}

