import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { WelcomeEmailComponentComponent } from './welcome-email-component/welcome-email-component.component';

const routes: Routes = [
  { path: '', component: HomeComponentComponent },
  { path: 'welcome-email/:username', component: WelcomeEmailComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
