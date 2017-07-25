import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Operator } from "../operator/operator";
import { OperatorService } from "../operator/operator.service";
import { Task } from "../task/task";
import { LoggerService } from "../logger/logger.service";
import { State } from "../operator/state";

@Component({
  selector: 'dd-active-task',
  templateUrl: './active-task.component.html',
  styleUrls: ['./active-task.component.css']
})
export class ActiveTaskComponent implements OnInit {
  @Input() activeTaskOperators: Operator[];
  @Output() taskCancelOrComplete = new EventEmitter();
  selectedOperator: Operator;

  constructor(private operatorService: OperatorService,
              private logger: LoggerService) { }

  ngOnInit() {
  }

  completeTask(result: string): void{
    this.selectedOperator.taskResult = result;
    this.selectedOperator.taskStatus = Task.statuses.complete;
    this.operatorService.completeTaskForOperator(this.selectedOperator).subscribe(
      () => this.taskCancelOrComplete.emit(this.selectedOperator),
      (errorMsg: string) => this.logger.log(`This is the UI error ${errorMsg}`)
    );    
  }

  //TODO get string from modal that's not in yet
  targetForCompleteTask(operator: Operator): void{
    this.selectedOperator = operator;
    this.logger.log(`Completing task for ${operator.firstName}`);
    this.completeTask("Good Fiber");
  }

  targetForCancelTask(operator: Operator): void{
    this.selectedOperator = operator;
    this.logger.log(`Cancelling task for ${operator.firstName}`);
    this.cancelTask();
  }

  cancelTask(){
    this.selectedOperator.taskResult = Task.results.cancelled;
    this.taskCancelOrComplete.emit(this.selectedOperator);
    this.operatorService.cancelTaskForOperator(this.selectedOperator).subscribe(
      () => this.taskCancelOrComplete.emit(this.selectedOperator),
      (errorMsg: string) => this.logger.log(`This is the UI error ${errorMsg}`)
    );    
  }

}
