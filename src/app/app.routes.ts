import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';

import {CreateNewNaut} from './pages/create-new-naut/create-new-naut';
import {ShowAllNauts} from './pages/show-all-nauts/show-all-nauts';

export const routes: Routes = [
  { path: '', redirectTo: 'showAllNauts', pathMatch: 'full' },
  { path: 'showAllNauts', component: ShowAllNauts },
  { path: 'createNewNaut', component: CreateNewNaut }
];

export const appRouterProviders = provideRouter(routes);
