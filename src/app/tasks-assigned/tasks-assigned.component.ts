import { Component, OnInit, Input } from '@angular/core';
import { Operator } from "../operator/operator";

@Component({
  selector: 'dd-tasks-assigned',
  templateUrl: './tasks-assigned.component.html',
  styleUrls: ['./tasks-assigned.component.css']
})
export class TasksAssignedComponent implements OnInit {
  @Input() operators: Operator[];
  currentlyActiveOperators: Operator[];

  constructor() { }

  ngOnInit() {
  }

}
