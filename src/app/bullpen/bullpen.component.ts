import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { OperatorService } from "../operator/operator.service";
import { Operator } from "../operator/operator";
import { ModalDirective } from "ngx-bootstrap/modal";
import { Task } from "../task/task";
import { TaskService } from "../task/task.service";
import { Observable } from "rxjs/RX";
import "rxjs/add/operator/map";
import { LoggerService } from "app/logger/logger.service";

import { State } from "../operator/state";

@Component({
  selector: 'dd-bullpen',
  templateUrl: './bullpen.component.html',
  styleUrls: ['./bullpen.component.css']
})
export class BullpenComponent implements OnInit {
  @ViewChild('tasksModal') public tasksModal: ModalDirective;
  @Input() bullpenOperators: Operator[];
  @Output() taskClick = new EventEmitter();
  tasks: string[];
  selectedOperator: Operator;
  

  constructor(private operatorService: OperatorService,
              private taskService: TaskService,
              private logger: LoggerService) { }

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }

  targetForTask(operator: Operator): void{
    console.log(`Assigning task to ${operator.firstName}`);
    this.selectedOperator = operator;
    this.tasksModal.show();
  }

  removeOperator(operator: Operator): void{
    console.log(`Removing operator ${operator.firstName}`);
    this.selectedOperator = operator;
    this.bullpenOperators = this.bullpenOperators.filter(o => o !== this.selectedOperator);
  }

  hideTasksModal(): void{
    this.tasksModal.hide();
  }

  assignTaskToSelectedOperator(task: string): void{
    this.selectedOperator.assignedTask = task;
    this.selectedOperator.state = State.active;
    this.hideTasksModal();
    
    this.operatorService.assignTaskToOperator(this.selectedOperator).subscribe(
      () => this.taskClick.emit(this.selectedOperator),
      (errorMsg: string) => this.logger.log(errorMsg)
    );
  }

}


