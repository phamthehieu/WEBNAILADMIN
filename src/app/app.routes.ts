import { Routes } from '@angular/router';

import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { AuthGuard } from './core/guards/auth.guard';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },

  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./features/auth/login/login.component').then((m) => m.LoginComponent),
      },
    ],
  },

  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.module').then((m) => m.AuthModule),
  },

  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/dashboard/dashboard.component').then((m) => m.DashboardComponent),
      },
      {
        path: 'chart',
        loadComponent: () =>
          import('./features/chart/chart.component').then((m) => m.ChartComponent),
      },
      {
        path: 'customer',
        loadComponent: () =>
          import('./features/customer/customer.component').then((m) => m.CustomerComponent),
      },
      {
        path: 'management',
        loadComponent: () =>
          import('./features/management/management.component').then((m) => m.ManagementComponent),
      },
      // handle user's misspelling: /serivce -> /service
      { path: 'serivce', redirectTo: 'service' },
      {
        path: 'service',
        loadComponent: () =>
          import('./features/service/service.component').then((m) => m.ServiceComponent),
      },
      {
        path: 'setting',
        loadComponent: () =>
          import('./features/setting/setting.component').then((m) => m.SettingComponent),
      },
      {
        path: 'staff',
        loadComponent: () =>
          import('./features/staff/staff.component').then((m) => m.StaffComponent),
      },
      {
        path: 'timesheet',
        loadComponent: () =>
          import('./features/timesheet/timesheet.component').then((m) => m.TimesheetComponent),
      },
    ],
  },

  { path: '**', redirectTo: 'login' },
];
