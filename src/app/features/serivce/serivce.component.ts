import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-serivce',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="space-y-2">
      <h1 class="text-2xl font-extrabold tracking-tight text-slate-900">Serivce (typo)</h1>
      <p class="text-sm text-slate-600">
        Thư mục này được tạo theo đúng tên bạn đưa (<code>serivce</code>). Route hiện đã redirect sang
        <code>/service</code>.
      </p>
    </div>
  `,
})
export class SerivceComponent {}

