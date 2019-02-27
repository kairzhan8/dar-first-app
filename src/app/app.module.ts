import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserService } from './services/user/user.service';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { CitiesModule } from './cities/cities/cities.module';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    UserListComponent,
    UserDetailComponent,
    TaskDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CitiesModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
