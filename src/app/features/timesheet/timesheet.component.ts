import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-timesheet',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="space-y-2">
      <h1 class="text-2xl font-extrabold tracking-tight">Timesheet</h1>
      <p class="text-sm opacity-80">Màn hình tạm thời (placeholder).</p>
    </div>
  `,
})
export class TimesheetComponent {}

