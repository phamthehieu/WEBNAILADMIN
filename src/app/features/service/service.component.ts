import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="space-y-2">
      <h1 class="text-2xl font-extrabold tracking-tight">Service</h1>
      <p class="text-sm opacity-80">Màn hình tạm thời (placeholder).</p>
      <p class="text-xs opacity-70">
        Ghi chú: dự án có route redirect từ <code>/serivce</code> sang <code>/service</code>.
      </p>
    </div>
  `,
})
export class ServiceComponent {}

