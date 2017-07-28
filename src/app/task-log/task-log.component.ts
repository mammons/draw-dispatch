import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { TaskService } from '../task/task.service';
import { Observable } from 'rxjs/Observable';
import { Task } from '../task/task';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { LoggerService } from 'app/logger/logger.service';

@Component({
  selector: 'dd-task-log',
  templateUrl: './task-log.component.html',
  styleUrls: ['./task-log.component.css']
})
export class TaskLogComponent implements OnInit {
@Input() taskLog: Task[];
@ViewChild('commentModal') public commentModal: ModalDirective;
selectedTask: Task;
comment= '';
disableCommentEntry = true;
editClicked = false;

  constructor(
    private taskService: TaskService,
    private logger: LoggerService) { }

  ngOnInit() {
    this.taskService.getTaskLog().subscribe(
      taskLog => this.taskLog = taskLog
    );
  }

  openCommentModal(task: Task) {
    this.selectedTask = task;
    this.logger.log(`This is the task from the modal ${JSON.stringify(task)}`);
    this.commentModal.show();
  }

  hideCommentModal() {
    this.commentModal.hide();
    this.disableCommentEntry = true;
    this.selectedTask.comment = this.comment;
    this.saveComment();
  }

  toggleEdit() {
    this.disableCommentEntry = false;
    this.editClicked = true;
  }

  saveComment() {
    if (this.editClicked) {
      this.taskService.updateTaskLog(this.selectedTask).subscribe(
      (response => this.logger.log(`Saved comment`)
    ),
    (errorMsg: string) => this.logger.log(errorMsg)
      );
    }
  }

}
