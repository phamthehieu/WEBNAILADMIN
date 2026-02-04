import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-contact-fab',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './contact-fab.component.html',
  styleUrls: ['./contact-fab.component.scss'],
})
export class ContactFabComponent {
  @Input() whatsappNumber = '';
  @Input() zaloLink = '';
  @Input() hotline = '';
  @Input() email = '';

  protected open = false;

  get hasWhatsApp(): boolean {
    return !!this.whatsappNumber?.trim();
  }
  get hasZalo(): boolean {
    return !!this.zaloLink?.trim();
  }
  get hasHotline(): boolean {
    return !!this.hotline?.trim();
  }
  get hasEmail(): boolean {
    return !!this.email?.trim();
  }
  get hasAny(): boolean {
    return this.hasWhatsApp || this.hasZalo || this.hasHotline || this.hasEmail;
  }

  toggle(): void {
    this.open = !this.open;
  }

  close(): void {
    this.open = false;
  }

  getWhatsAppUrl(): string {
    const num = this.whatsappNumber.replace(/\D/g, '');
    return `https://wa.me/${num}`;
  }

  getTelUrl(): string {
    const num = this.hotline.replace(/\D/g, '');
    return `tel:${num}`;
  }

  getMailUrl(): string {
    return `mailto:${this.email}`;
  }
}
