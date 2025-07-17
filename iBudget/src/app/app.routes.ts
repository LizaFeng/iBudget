import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBudget } from './create-budget/create-budget';
import { HomeComponent } from './home-component/home-component';
import { UserInfo } from './user-info/user-info';
import { PageNotFound } from './page-not-found/page-not-found';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'create-budget', component: CreateBudget },
  { path: 'user-info', component: UserInfo },
  { path: '**', component: PageNotFound },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
