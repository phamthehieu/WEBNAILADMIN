import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';
import { LanguageToggleComponent } from '../language-toggle/language-toggle.component';

@Component({
  selector: 'app-site-nav',
  standalone: true,
  imports: [
    MatIconModule,
    ThemeToggleComponent,
    LanguageToggleComponent,
    TranslateModule,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './site-nav.component.html',
})
export class SiteNavComponent {
}

