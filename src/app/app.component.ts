import { Component, OnInit } from '@angular/core';

import { OperatorService } from "./operator/operator.service";
import { Operator } from "./operator/operator";
import { State } from "./operator/state";
import { LoggerService } from "app/logger/logger.service";
import { TaskService } from "app/task/task.service";

import { Observable } from "rxjs/Observable";


@Component({
  selector: 'dd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  operators: Operator[];
  activeTaskOperators: Operator[] = [];
  bullpenOperators: Operator[];
  taskLog: string[];

  constructor(private operatorService: OperatorService,
    private logger: LoggerService,
    private taskService: TaskService) { }

  ngOnInit() {
    this.getOperators();
  }


  getOperators() {
    this.operatorService.getOperators()
      .subscribe(
      opers => {
        this.operators = opers;
        this.updateOperators();
      })
  }

  updateOperators() {    
    this.bullpenOperators = this.operators.filter(bpOper => bpOper['state'] == State.bullpen);     
    this.logger.log("Assigning bullpen operators based on state: " + this.bullpenOperators);
    
    this.activeTaskOperators = this.operators.filter(atOper => atOper['state'] == State.active);
    this.logger.log("Assigning active operators based on state: " + this.activeTaskOperators);
  }

  closeOutOperator(operator: Operator): void{
    this.taskService.updateTaskLog(operator).subscribe();
    this.getTaskLog();
    this.operatorService.resetOperatorAfterCompleteOrCancel(operator);
    this.updateOperators();
  }

  getTaskLog(): void{
        this.taskService.getTaskLog()
      .subscribe(
      tasks => {
        this.taskLog = tasks;
        this.logger.log(`Got taskLog ${tasks}`);
      })
  }

}
