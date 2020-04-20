import {Component} from '@angular/core'
import {DataService} from '../service/data.service'

@Component({
  selector : 'app-contact-list',
  templateUrl : './contact-list.component.html',
  styleUrls :['./contact-list.component.css']
})
export class ContactListComponent{
  contacts ;
  selectedContact;
  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.contacts = this.dataService.getContacts();    
  }
  public selectContact(contact){
    this.selectedContact = contact;
  }
}