import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="space-y-2">
      <h1 class="text-2xl font-extrabold tracking-tight text-slate-900">Service</h1>
      <p class="text-sm text-slate-600">Màn hình tạm thời (placeholder).</p>
      <p class="text-xs text-slate-500">
        Ghi chú: dự án có route redirect từ <code>/serivce</code> sang <code>/service</code>.
      </p>
    </div>
  `,
})
export class ServiceComponent {}

