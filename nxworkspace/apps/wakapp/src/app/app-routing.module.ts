import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MinimalLayoutComponent } from './layout/components/minimal-layout/minimal-layout.component';
import { FullLayoutComponent } from './layout/components/full-layout/full-layout.component';

import { authRoutes, AuthModule } from '@nxworkspace/auth'; 

const appRoutes: Routes = [
  {
    path: 'auth',
    component: MinimalLayoutComponent,
    children: authRoutes,
    // loadChildren: () =>
    //   import('@nxworkspace/auth/auth.module').then((m) => m.AuthModule),
  },
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },

  {
    path: 'login2',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'myprofile',
    component: FullLayoutComponent,
    loadChildren: () =>

      import('./my-profile/my-profile.module').then((m) => m.MyProfileModule),
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule,
    RouterModule.forRoot(appRoutes, {
      initialNavigation: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
