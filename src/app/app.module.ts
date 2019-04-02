import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserService } from './services/user/user.service';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { CitiesModule } from './cities/cities/cities.module';
import { FlexComponent } from './flex/flex.component';
import { TaskStatePipe } from './task-list/task-state.pipe';
import { TitleColorPipe } from './task-list/title-color.pipe';
import { LoggerInterceptor } from './cities/components/logger.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    UserListComponent,
    UserDetailComponent,
    TaskDetailsComponent,
    FlexComponent,
    TaskStatePipe,
    TitleColorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CitiesModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoggerInterceptor, multi: true},
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
