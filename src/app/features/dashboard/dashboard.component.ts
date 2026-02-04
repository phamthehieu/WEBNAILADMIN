import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import {
  Appointment,
  AppointmentCardComponent,
} from './components/appointment-card.component';
import {
  DropdownOption,
  DropdownSelectComponent,
} from '../../shared/components/dropdown-select/dropdown-select.component';
import { AppointmentListViewComponent } from './components/appointment-list-view.component';

type ViewMode = 'grid' | 'list';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    AppointmentCardComponent,
    DropdownSelectComponent,
    AppointmentListViewComponent,
  ],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  staffOptions: DropdownOption[] = [
    { value: 'all', label: 'dashboard.filter.allStaff' },
    { value: 'emy', label: 'Emy' },
    { value: 'jame', label: 'Jame' },
    { value: 'laly', label: 'Laly' },
  ];
  selectedStaff: string = 'all';

  viewMode: ViewMode = 'grid';

  private readonly baseAppointments: Appointment[] = [
    {
      id: '1',
      label: '0265787656',
      pointsLabel: '0 pts earned',
      service: 'Gel Nails',
      staff: 'Emy',
      time: '7:30 PM',
      scheduledDate: 'Jan 20, 2026',
      status: 'completed',
    },
    {
      id: '2',
      label: 'Malan',
      pointsLabel: '120 pts earned',
      service: 'Hair Styling',
      staff: 'Laly',
      time: '2:30 PM',
      scheduledDate: 'Jan 20, 2026',
      status: 'pending',
    },
    {
      id: '3',
      label: '0287613490',
      pointsLabel: '12 pts',
      service: 'Gel Nails',
      staff: 'Emy',
      time: '8:30 PM',
      scheduledDate: 'Jan 20, 2026',
      status: 'completed',
    },
    {
      id: '4',
      label: '0428369790',
      pointsLabel: '0 pts',
      service: 'Full Hair',
      staff: 'Jame',
      time: '7:00 PM',
      scheduledDate: 'Jan 20, 2026',
      status: 'pending',
    },
    {
      id: '5',
      label: '0447890160',
      pointsLabel: '45 pts',
      service: 'Gel Polish',
      staff: 'Jame',
      time: '2:30 PM',
      scheduledDate: 'Jan 20, 2026',
      status: 'completed',
    },
    {
      id: '6',
      label: 'Hyt',
      pointsLabel: '21 pts',
      service: 'Highlights',
      staff: 'Emy',
      time: '4:00 PM',
      scheduledDate: 'Jan 20, 2026',
      status: 'pending',
    },
    {
      id: '7',
      label: '0245968796',
      pointsLabel: '0 pts',
      service: 'Wash & Cut',
      staff: 'Emy',
      time: '5:00 PM',
      scheduledDate: 'Jan 20, 2026',
      status: 'completed',
    },
    {
      id: '8',
      label: '0227613420',
      pointsLabel: '3 pts',
      service: 'Hair Color',
      staff: 'Laly',
      time: '2:30 PM',
      scheduledDate: 'Jan 20, 2026',
      status: 'cancelled',
    },
  ];

  // Lặp nhiều lần để chắc chắn có scroll; sau này thay bằng data thật từ API
  readonly appointments: Appointment[] = Array.from({ length: 24 }).map(
    (_, idx) => {
      const base = this.baseAppointments[idx % this.baseAppointments.length];
      return {
        ...base,
        id: `${base.id}-${idx}`,
      };
    },
  );

  setViewMode(mode: ViewMode): void {
    this.viewMode = mode;
  }
}

