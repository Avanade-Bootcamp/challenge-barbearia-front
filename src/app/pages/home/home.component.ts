import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { CommonModule } from '@angular/common';
import { ContactComponent } from '../../components/contact/contact.component';
import { Contact } from '../../model/contact.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, ContactComponent],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  contacts: Contact[] = [];
  isLoading: boolean = false;

  constructor(private contactService: ContactService, private router: Router) {  }

  ngOnInit() {
    this.contactService.getAllContacts().subscribe({
      next: (data) => {
        this.contacts = data;
        console.log(this.contacts)
        
      },
      error: (error) => console.log(error),
      complete: () => this.isLoading = false
    });

  }

  createContact() {
    this.router.navigate(["/create-contact"])
  }

}
