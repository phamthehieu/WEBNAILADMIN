import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-management',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="space-y-2">
      <h1 class="text-2xl font-extrabold tracking-tight text-slate-900">Management</h1>
      <p class="text-sm text-slate-600">Màn hình tạm thời (placeholder).</p>
    </div>
  `,
})
export class ManagementComponent {}

