import { Component,ViewChild, OnInit } from '@angular/core';

import { OperatorService } from "./operator/operator.service";
import { Operator } from "./operator/operator";
import { State } from "./operator/state";
import { LoggerService } from "app/logger/logger.service";
import { TaskService } from "app/task/task.service";

import { Observable } from "rxjs/Observable";

import { ModalDirective } from "ngx-bootstrap/modal";


@Component({
  selector: 'dd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  operatorPool: Operator[];
  availableOperators: Operator[];
  activeTaskOperators: Operator[];
  bullpenOperators: Operator[];
  currentlyActiveOperators: Operator[];

  tasks: string[];
  taskResults: string[];
  towers: string[];
  taskLog: string[];

  @ViewChild('operModal') public operModal: ModalDirective;

  constructor(
    private operatorService: OperatorService,
    private logger: LoggerService,
    private taskService: TaskService) { }

  ngOnInit() {
    this.getOperators();
    this.getTaskData();
    
  }


  getOperators() {
    this.operatorService.getOperators()
      .subscribe(
      opers => {
        this.operatorPool = opers;
        this.updatePanels();
      })
  }

  getTaskData(){
    this.taskService.getTaskData()
    .subscribe(
      response => {
        this.tasks = response[0].tasks;
        this.taskResults = response[0].taskResults;
        this.towers = response[0].towers;
      });
  }

  updatePanels() {
    this.bullpenOperators = this.operatorPool.filter(bpOper => bpOper['state'] == State.bullpen);
    this.logger.log("Assigning bullpen operators based on state: " + this.bullpenOperators);

    this.activeTaskOperators = this.operatorPool.filter(atOper => atOper['state'] == State.active);
    this.logger.log("Assigning active operators based on state: " + this.activeTaskOperators);

    this.currentlyActiveOperators = this.operatorPool.filter(caOper => caOper['state'] !== State.available);
  }

  toggleBullpenState(operator: Operator): void{
    operator.state == State.available ? operator.state = State.bullpen : operator.state = State.available;
    this.logger.log(`Toggle state of ${operator.firstName} : ${operator.state}`);
  }

  closeOutOperator(operator: Operator): void {
    this.taskService.updateTaskLog(operator).subscribe();
    this.getTaskLog();
    this.operatorService.resetOperatorAfterCompleteOrCancel(operator);
    this.updatePanels();
  }

  getTaskLog(): void {
    this.taskService.getTaskLog()
      .subscribe(
      tasks => {
        this.taskLog = tasks;
        this.logger.log(`Got taskLog ${tasks}`);
        localStorage.setItem('taskLog', JSON.stringify(this.taskLog));
      })
  }

  openModalToAddOperator(){
    this.availableOperators = this.operatorPool.filter(avail => avail['state'] == State.available);
    this.operModal.show();
  }

  hideOperModal(){
    this.operModal.hide();
    this.updatePanels();
  }

}
