import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';

type NavItem = {
  label: string;
  icon: string;
  link: string;
  exact?: boolean;
  section?: 'main' | 'management';
};

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
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
    { label: 'Dashboard', icon: 'dashboard', link: '/dashboard', exact: true, section: 'main' },
    { label: 'Chart', icon: 'bar_chart', link: '/chart', section: 'main' },
    { label: 'Customer', icon: 'group', link: '/customer', section: 'main' },
    { label: 'Service', icon: 'content_cut', link: '/service', section: 'main' },
    { label: 'Staff', icon: 'groups', link: '/staff', section: 'main' },
    { label: 'Timesheet', icon: 'schedule', link: '/timesheet', section: 'main' },
    { label: 'Management', icon: 'confirmation_number', link: '/management', section: 'management' },
    { label: 'Setting', icon: 'settings', link: '/setting', section: 'management' },
  ];

  readonly pageTitle = signal('Dashboard Overview');
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
    this.pageTitle.set(item?.label ?? 'Admin');
  }
}

