import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { OperatorService } from "../operator/operator.service";
import { IOperator } from "../operator/operator";
import { ModalDirective } from "ngx-bootstrap/modal";
import { Task } from "../task/task";
import { TaskService } from "../task/task.service";
import { Observable } from "rxjs/RX";
import "rxjs/add/operator/map";
import { LoggerService } from "app/logger/logger.service";

@Component({
  selector: 'dd-bullpen',
  templateUrl: './bullpen.component.html',
  styleUrls: ['./bullpen.component.css']
})
export class BullpenComponent implements OnInit {
  @ViewChild('tasksModal') public tasksModal: ModalDirective;
  @Input() bullpenOperators: IOperator[];
  @Output() taskClick = new EventEmitter();
  operatorPool: IOperator[];
  tasks: string[];
  selectedOperator: IOperator;
  

  constructor(private operatorService: OperatorService,
              private taskService: TaskService,
              private logger: LoggerService) { }

  ngOnInit() {
    this.getOperators();
    this.tasks = this.taskService.getTasks();
  }

  getOperators(){
    this.logger.log("Getting operators...");

    this.operatorService.getOperators().subscribe(
      opers => {
        this.bullpenOperators = opers;
      }
    )
  }

  target(operator: IOperator): void{
    console.log(`Assigning task to ${operator.firstName}`);
    this.selectedOperator = operator;
    this.tasksModal.show();
  }

  removeOperator(operator: IOperator): void{
    console.log(`Removing operator ${operator.firstName}`);
    this.selectedOperator = operator;
    this.bullpenOperators = this.bullpenOperators.filter(o => o !== this.selectedOperator);
  }

  hideTasksModal(): void{
    this.tasksModal.hide();
  }

  assignTaskToSelectedOperator(task: string): void{
    this.selectedOperator.assignedTask = task;
    this.hideTasksModal();
    this.taskClick.emit(this.selectedOperator);
    console.log(`${this.selectedOperator.firstName} was assigned the task ${this.selectedOperator.assignedTask}`);
  }

}


