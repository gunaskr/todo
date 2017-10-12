import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TasksApi } from './../todo-client';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatListModule} from '@angular/material';
import {MatTooltipModule} from '@angular/material';
import {MatTabsModule} from '@angular/material';
import { TaskListComponent } from './task-list/task-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatListModule,
    MatTooltipModule,
    MatTabsModule
  ],
  providers: [TasksApi],
  bootstrap: [AppComponent]
})
export class AppModule { }
