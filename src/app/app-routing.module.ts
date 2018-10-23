import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as FromComponents from './components';

const routes: Routes = [
  {
    path: '',
    component: FromComponents.HomeComponent
  },
  {
    path: 'login',
    component: FromComponents.LoginComponent
  },
  {
    path: 'conversations',
    component: FromComponents.ConversationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
