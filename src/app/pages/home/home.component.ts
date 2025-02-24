import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  contacts: any[] = [];
  isLoading: boolean = false;

  constructor(private contactService: ContactService) {  }

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

}
