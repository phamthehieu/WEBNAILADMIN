import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

export type AppointmentStatus = 'completed' | 'pending' | 'cancelled';

export interface Appointment {
  id: string;
  label: string;
  pointsLabel: string;
  service: string;
  staff: string;
  time: string;
  scheduledDate: string;
  status: AppointmentStatus;
}

@Component({
  selector: 'app-appointment-card',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './appointment-card.component.html',
})
export class AppointmentCardComponent {
  @Input({ required: true }) appointment!: Appointment;
  /** dùng để thêm class stagger-1..8 cho animation */
  @Input() index = 0;

  get staggerClass(): string {
    const i = (this.index % 8) + 1;
    return `stagger-${i}`;
  }
}

