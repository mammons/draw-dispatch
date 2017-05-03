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

@NgModule({
  declarations: [
    AppComponent,
    BullpenComponent,
    NavComponent
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
    ModalModule
  ],
  providers: [OperatorService, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
