import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  @Input() id: number = 0;
  @Input() name: string = "";
  @Input() email: string = "";

  constructor(private router: Router) { }
  
  handleClick () {
    this.router.navigate([`/user-details/${this.id}`]);
  }

}
