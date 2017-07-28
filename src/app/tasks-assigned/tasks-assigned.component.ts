import { Component, Input } from '@angular/core';
import { Operator } from '../operator/operator';

@Component({
  selector: 'dd-tasks-assigned',
  templateUrl: './tasks-assigned.component.html',
  styleUrls: ['./tasks-assigned.component.css']
})
export class TasksAssignedComponent {
  @Input() operators: Operator[];
  currentlyActiveOperators: Operator[];

  constructor() { }

}
