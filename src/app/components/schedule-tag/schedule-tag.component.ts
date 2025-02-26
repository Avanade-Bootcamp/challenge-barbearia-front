import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-schedule-tag',
  imports: [],
  templateUrl: './schedule-tag.component.html',
  styleUrl: './schedule-tag.component.css'
})
export class ScheduleTagComponent {
  @Input() date: string = "";


  get formattedDate(): string {
    if (!this.date) return "";

    const parsedDate = new Date(this.date);
    
    // Verifica se a data é válida
    if (isNaN(parsedDate.getTime())) return "Data inválida";

    return parsedDate.toLocaleDateString('pt-BR');
  }

  get formattedTime(): string {
    if (!this.date) return "";

    const time = this.date.split("T")[1].substring(0, 5);
    
    // Verifica se a data é válida

    return time;
  }

}
