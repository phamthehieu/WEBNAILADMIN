import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { AuthPageLayoutComponent } from '../../../shared/components/auth-page-layout/auth-page-layout.component';
import { InputFieldComponent } from '../../../shared/components/input-field/input-field.component';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    TranslateModule,
    InputFieldComponent,
    AuthPageLayoutComponent,
    MatIconModule,
  ],
  templateUrl: './reset_password.component.html',
})
export class ResetPasswordComponent {
  password = '';
  confirmPassword = '';

  constructor(private router: Router) {}

  submit() {
    this.router.navigate(['/auth/login']);
  }
}
