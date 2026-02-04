import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { filter } from 'rxjs/operators';
import { LanguageToggleComponent } from '../../shared/components/language-toggle/language-toggle.component';
import { ThemeToggleComponent } from '../../shared/components/theme-toggle/theme-toggle.component';

type NavItem = {
  labelKey: string;
  icon: string;
  link: string;
  exact?: boolean;
  section?: 'main' | 'management';
};

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    TranslateModule,
    LanguageToggleComponent,
    ThemeToggleComponent,
  ],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css'],
})
export class MainLayoutComponent {
  private readonly router = inject(Router);

  // Mobile drawer (overlay)
  readonly mobileDrawerOpen = signal(false);

  // Desktop collapse (80px/260px)
  readonly sidebarCollapsed = signal(false);

  readonly navItems: NavItem[] = [
    { labelKey: 'admin.nav.dashboard', icon: 'dashboard', link: '/dashboard', exact: true, section: 'main' },
    { labelKey: 'admin.nav.chart', icon: 'bar_chart', link: '/chart', section: 'main' },
    { labelKey: 'admin.nav.customer', icon: 'group', link: '/customer', section: 'main' },
    { labelKey: 'admin.nav.service', icon: 'content_cut', link: '/service', section: 'main' },
    { labelKey: 'admin.nav.staff', icon: 'groups', link: '/staff', section: 'main' },
    { labelKey: 'admin.nav.timesheet', icon: 'schedule', link: '/timesheet', section: 'main' },
    { labelKey: 'admin.nav.management', icon: 'confirmation_number', link: '/management', section: 'management' },
    { labelKey: 'admin.nav.setting', icon: 'settings', link: '/setting', section: 'management' },
  ];

  readonly pageTitleKey = signal('admin.title');
  readonly mainNav = computed(() => this.navItems.filter((x) => (x.section ?? 'main') === 'main'));
  readonly managementNav = computed(() =>
    this.navItems.filter((x) => (x.section ?? 'main') === 'management')
  );

  constructor() {
    this.syncTitleFromUrl(this.router.url);
    this.router.events
      .pipe(
        filter((e): e is NavigationEnd => e instanceof NavigationEnd)
      )
      .subscribe((e) => {
        // Close mobile drawer after navigation
        this.mobileDrawerOpen.set(false);
        this.syncTitleFromUrl(e.urlAfterRedirects);
      });
  }

  toggleMobileDrawer() {
    this.mobileDrawerOpen.update((v) => !v);
  }

  closeMobileDrawer() {
    this.mobileDrawerOpen.set(false);
  }

  toggleSidebarCollapsed() {
    this.sidebarCollapsed.update((v) => !v);
  }

  private syncTitleFromUrl(url: string) {
    const path = url.split('?')[0].split('#')[0];
    const item = this.navItems.find((x) => x.link === path);
    this.pageTitleKey.set(item?.labelKey ?? 'admin.title');
  }
}

