import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from "../task/task.service";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'dd-task-log',
  templateUrl: './task-log.component.html',
  styleUrls: ['./task-log.component.css']
})
export class TaskLogComponent implements OnInit {
@Input() taskLog: string[];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.getTaskLog().subscribe(
      taskLog => this.taskLog = taskLog
    );
  }

}
