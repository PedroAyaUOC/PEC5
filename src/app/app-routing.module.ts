import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamComponent } from './components/team/team.component';
import { TeamsComponent } from './components/teams/teams.component';

const routes: Routes = [
  { path: '', component: TeamsComponent},
  { path: 'teams/:id', component: TeamComponent},
  { path: '**', component: TeamsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
