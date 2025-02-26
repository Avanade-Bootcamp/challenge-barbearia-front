import { Component, ElementRef, ViewChild } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { ScheduleTagComponent } from '../../components/schedule-tag/schedule-tag.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-contact',
  imports: [ScheduleTagComponent, CommonModule],
  templateUrl: './create-contact.component.html',
  styleUrl: './create-contact.component.css'
})
export class CreateContactComponent {

  @ViewChild('name') name: any;
  @ViewChild('email') email: any;


  constructor(private contactService: ContactService) {  }
  
  createNewContact() {

    
    this.contactService.createContact(this.name.nativeElement.value, this.email.nativeElement.value).subscribe({
      next: (data) => {
        console.log("Contato criado com sucesso:", data);
      },
      error: (error) => {
        console.log("Erro ao criar contato:", error);
      },
    });
  }
  
}
