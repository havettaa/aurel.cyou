import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FullLayoutComponent } from './components/full-layout/full-layout.component';
import { MinimalLayoutComponent } from './components/minimal-layout/minimal-layout.component';

const routes: Routes = [{ path: '', component: FullLayoutComponent }];


@NgModule({
  declarations: [
    FullLayoutComponent,
    MinimalLayoutComponent
  ],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutModule { }
