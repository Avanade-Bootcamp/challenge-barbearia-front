import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppointmentService } from '../../services/appointment.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScheduleTagComponent } from '../../components/schedule-tag/schedule-tag.component';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  imports: [CommonModule, FormsModule, ScheduleTagComponent],
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userId: string | null = "";
  appointment: any[] = [];

  date: string = '';
  time: string = '';

  options: { display: string; value: string }[] = [
    {
      display: "08h",
      value: "08:00"
    },
    {
      display: "09h",
      value: "09:00"
    },
    {
      display: "10h",
      value: "10:00"
    },
    {
      display: "11h",
      value: "1:00"
    },
    {
      display: "12h",
      value: "12:00"
    },
    {
      display: "13h",
      value: "13:00"
    },
    {
      display: "14h",
      value: "14:00"
    },
    {
      display: "15h",
      value: "15:00"
    },
    {
      display: "16h",
      value: "16:00"
    },
  ];

  constructor(private route: ActivatedRoute, private appointmentService: AppointmentService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.userId = params.get("id");

      if (this.userId) {
        this.loadAppointments(this.userId);
      }
    });
  }

  loadAppointments(id: string): void {
    this.appointmentService.getUserAppointments(id).subscribe({
      next: (data) => {
        console.log('Agendamentos recebidos:', data); 
        this.appointment = data;  
      },
      error: (error) => {
        console.error("Erro ao buscar agendamentos:", error);
      }
    });
  }

  sendAppointments() {

    if(this.userId){

      this.appointmentService.createAppointments(`${this.date}T${this.time}`, this.userId).subscribe({
        next: () => {
          window.location.reload();
        },
        error: () => {
          console.log("Something went wrong");
        }
      })
    }

  }
  
}
