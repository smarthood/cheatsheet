import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './core/components/main/main.component';
import { CheatsheetComponent } from './core/components/cheatsheet/cheatsheet.component';
import { LoginGuard } from './core/services/Guard/login.guard';
import { AddCodeComponent } from './core/components/add-code/add-code.component';
import { CanDeactivateGuard } from './core/services/Guard/can-deactivate.guard';
import { FeedbackComponent } from './core/components/feedback/feedback.component';
import { PhaseiiComponent } from './core/components/phaseii/phaseii.component';
import { JsonComponent } from './core/components/json/json.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'phase2',
    component: PhaseiiComponent,
  },
  {
    path: 'cheatsheet/:id',
    component: CheatsheetComponent,
  },
  {
    path: 'add/:id/:dataId',
    canActivate: [LoginGuard],
    component: AddCodeComponent,
    canDeactivate: [CanDeactivateGuard],
  },
  {
    path: 'add/:id',
    canActivate: [LoginGuard],
    component: AddCodeComponent,
    canDeactivate: [CanDeactivateGuard],
  },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'json', component: JsonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
