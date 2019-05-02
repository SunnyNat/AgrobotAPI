import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ShowMissionComponent } from './show-mission/show-mission.component';
import { CreateMissionComponent } from './create-mission/create-mission.component';
import { MissionListComponent } from './mission-list/mission-list.component';
import { MissionControlComponent } from './mission-control/mission-control.component';
import { PhotoBrowsingComponent } from './photo-browsing/photo-browsing.component';
import { PlanRouteComponent } from './plan-route/plan-route.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent} from './navigation/header/header.component';
import { RoutingModule } from './routing/routing.module';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { MissionDetailComponent} from './mission-detail/mission-detail.component';
import { MissionDetailService} from './shared/mission-detail.service';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserService } from './shared/user.service';
import { LoginComponent } from './user/login/login.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowMissionComponent,
    CreateMissionComponent,
    MissionListComponent,
    MissionControlComponent,
    PhotoBrowsingComponent,
    PlanRouteComponent,
    HomeComponent,
    HeaderComponent,
    SidenavListComponent,
    MissionDetailComponent,
    UserComponent,
    RegistrationComponent,
    LoginComponent,
    AdminPanelComponent,
    ForbiddenComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    RoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      progressBar: true,
    }),
    ReactiveFormsModule
  ],
  providers: [
    MissionDetailService,
    UserService,
    UserService, {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
