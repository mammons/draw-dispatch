import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { TaskService } from "../task/task.service";
import { Observable } from "rxjs/Observable";
import { Task } from "../task/task";
import { ModalDirective } from "ngx-bootstrap/modal";

@Component({
  selector: 'dd-task-log',
  templateUrl: './task-log.component.html',
  styleUrls: ['./task-log.component.css']
})
export class TaskLogComponent implements OnInit {
@Input() taskLog: Task[];
@ViewChild('commentModal') public commentModal: ModalDirective
selectedTask: Task;
comment="";

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.getTaskLog().subscribe(
      taskLog => this.taskLog = taskLog
    );
  }

  openCommentModal(task: Task){
    this.selectedTask = task;
    this.commentModal.show();
  }

  hideCommentModal(){
    this.commentModal.hide();
    this.selectedTask.comment = this.comment;
    console.log(`Modal just closed here's what came out of that ${JSON.stringify(this.selectedTask)}`);
  }

}
