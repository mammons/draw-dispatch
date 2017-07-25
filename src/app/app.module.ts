import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BsDropdownModule,
          ModalModule } from "ngx-bootstrap";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule,
          MdToolbarModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BullpenComponent } from './bullpen/bullpen.component';
import { OperatorService } from './operator/operator.service';
import { NavComponent } from './nav/nav.component';
import { TaskService } from './task/task.service';
import { ActiveTaskComponent } from './active-task/active-task.component';

import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryOperatorService } from "../in-memory-operator-service";
import { LoggerService } from './logger/logger.service';
import { TasksAssignedComponent } from './tasks-assigned/tasks-assigned.component';

@NgModule({
  declarations: [
    AppComponent,
    BullpenComponent,
    NavComponent,
    ActiveTaskComponent,
    TasksAssignedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    BsDropdownModule.forRoot(),
    ModalModule,
    InMemoryWebApiModule.forRoot(InMemoryOperatorService)
  ],
  providers: [OperatorService, TaskService, LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
