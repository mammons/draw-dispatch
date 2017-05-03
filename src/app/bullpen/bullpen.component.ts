import { Component, OnInit, ViewChild } from '@angular/core';
import { OperatorService } from "../operator/operator.service";
import { IOperator } from "../operator/operator";
import { ModalDirective } from "ngx-bootstrap/modal";
import { Task } from "../task/task";
import { TaskService } from "../task/task.service";

@Component({
  selector: 'dd-bullpen',
  templateUrl: './bullpen.component.html',
  styleUrls: ['./bullpen.component.css']
})
export class BullpenComponent implements OnInit {
  @ViewChild('tasksModal') public tasksModal: ModalDirective;
  operators: IOperator[];
  tasks: string[];
  selectedOperator: IOperator;
  

  constructor(private operatorService: OperatorService,
              private taskService: TaskService) { }

  ngOnInit() {
    this.operators = this.operatorService.getOperators();
    this.tasks = this.taskService.getTasks();
    console.log(this.operators);
    console.log(this.tasks);
  }

  target(operator: IOperator): void{
    console.log(`Assigning task to ${operator.firstName}`);
    this.selectedOperator = operator;
    this.tasksModal.show();
  }

  removeOperator(operator: IOperator): void{
    console.log(`Removing operator ${operator.firstName}`);
    this.selectedOperator = operator;
    operator.inBullpen = false;
  }

  hideTasksModal(): void{
    this.tasksModal.hide();
  }

  assignTaskToSelectedOperator(task: string): void{
    this.selectedOperator.assignedTask = task;
    this.hideTasksModal();
    console.log(`${this.selectedOperator.firstName} was assigned the task ${this.selectedOperator.assignedTask}`);
  }

}


