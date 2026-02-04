import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Appointment } from './appointment-card.component';

@Component({
  selector: 'app-appointment-list-view',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './appointment-list-view.component.html',
})
export class AppointmentListViewComponent {
  @Input({ required: true }) appointments: Appointment[] = [];
}

