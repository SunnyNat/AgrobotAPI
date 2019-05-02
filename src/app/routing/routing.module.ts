import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { CreateMissionComponent } from '../create-mission/create-mission.component';
import { MissionControlComponent } from '../mission-control/mission-control.component';
import { UserComponent } from '../user/user.component';
import { RegistrationComponent } from '../user/registration/registration.component';
import { LoginComponent } from '../user/login/login.component';
import { AuthGuard } from '../auth/auth.guard';
import { ForbiddenComponent } from '../forbidden/forbidden.component';
import { AdminPanelComponent } from '../admin-panel/admin-panel.component';
const routes: Routes = [

  { path: '', redirectTo: '/user/login', pathMatch: 'full' },
  { path: 'createmission', component: CreateMissionComponent},
  { path: 'missioncontrol', component: MissionControlComponent},
  { path: 'user', component: UserComponent,
    children: [
      { path: 'registration', component: RegistrationComponent},
      { path: 'login', component: LoginComponent}]
  },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'forbidden', component: ForbiddenComponent},
  { path: 'adminpanel', component: AdminPanelComponent, canActivate: [AuthGuard], data: {permittedRoles: ['Admin']}}

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
