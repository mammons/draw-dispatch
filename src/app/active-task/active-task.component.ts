import { Component, ViewChild, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Operator } from "../operator/operator";
import { OperatorService } from "../operator/operator.service";
import { Task } from "../task/task";
import { LoggerService } from "../logger/logger.service";
import { TaskService } from "../task/task.service";
import { State } from "../operator/state";
import { ModalDirective } from "ngx-bootstrap/modal";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'dd-active-task',
  templateUrl: './active-task.component.html',
  styleUrls: ['./active-task.component.css']
})
export class ActiveTaskComponent implements OnInit {
  @ViewChild('taskResultsModal') public taskResultsModal: ModalDirective;
  @Input() activeTaskOperators: Operator[];
  @Input() taskResults: string[];
  @Output() taskCancelOrComplete = new EventEmitter();
  selectedOperator: Operator;

  constructor(private operatorService: OperatorService,
              private logger: LoggerService,
            private taskService: TaskService) { }

  ngOnInit() {
    // this.taskService.getTaskResults().subscribe(
    //   taskResults => this.taskResults = taskResults
    // );
  }

  completeTask(result: string): void{
    this.selectedOperator.taskResult = result;
    this.selectedOperator.taskStatus = Task.statuses.complete;
    this.operatorService.completeTaskForOperator(this.selectedOperator).subscribe(
      () => this.taskCancelOrComplete.emit(this.selectedOperator),
      (errorMsg: string) => this.logger.log(`This is the UI error ${errorMsg}`)
    );    
  }

  hideTaskResultsModal(): void{
    this.taskResultsModal.hide();
  }

  assignTaskResultToSelectedOperator(result: string): void{
    this.selectedOperator.taskResult = result;
    this.hideTaskResultsModal();
    this.completeTask(result);
  }

  //TODO get string from modal that's not in yet
  targetForCompleteTask(operator: Operator): void{
    this.selectedOperator = operator;
    this.logger.log(`Completing task for ${operator.firstName}`);
    this.taskResultsModal.show();
  }

  targetForCancelTask(operator: Operator): void{
    this.selectedOperator = operator;
    this.logger.log(`Cancelling task for ${operator.firstName}`);
    this.cancelTask();
  }

  cancelTask(){
    this.selectedOperator.taskStatus = Task.statuses.cancel;
    this.selectedOperator.taskResult = Task.results.cancelled;
    this.operatorService.cancelTaskForOperator(this.selectedOperator).subscribe(
      () => this.taskCancelOrComplete.emit(this.selectedOperator),
      (errorMsg: string) => this.logger.log(`This is the UI error ${errorMsg}`)
    );    
  }

}
