import { Component, OnInit, Input } from '@angular/core';
import { IOperator } from "../operator/operator";

@Component({
  selector: 'dd-active-task',
  templateUrl: './active-task.component.html',
  styleUrls: ['./active-task.component.css']
})
export class ActiveTaskComponent implements OnInit {
  @Input() activeTaskOperators: IOperator[];
  selectedOperator: IOperator;

  constructor() { }

  ngOnInit() {
  }

  completeTask(operator: IOperator): void{
    this.selectedOperator = operator;
    console.log(`Completing task for ${operator.firstName}`);
    this.selectedOperator.assignedTask = "None";
    
  }

  cancelTask(operator: IOperator): void{
    this.selectedOperator.assignedTask = "None";
    console.log(`Cancelling task for ${operator.firstName}`);
    this.activeTaskOperators.filter(oper => oper.assignedTask !== "None");
  }

  returnToBullpen(operator: IOperator): void{
    this.activeTaskOperators = this.activeTaskOperators.filter(oper => oper.assignedTask !== "None");
  }

}
