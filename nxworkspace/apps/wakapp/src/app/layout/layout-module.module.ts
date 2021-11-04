import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FullLayoutComponent } from './components/full-layout/full-layout.component';

const routes: Routes = [{ path: '', component: FullLayoutComponent }];


@NgModule({
  declarations: [
    FullLayoutComponent
  ],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutModule { }
