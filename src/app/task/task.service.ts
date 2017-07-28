import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';

import { Task } from "./task";
import { LoggerService } from "../logger/logger.service";
import { Operator } from "app/operator/operator";

@Injectable()
export class TaskService {
  private tasksUrl = 'api/tasksJson';
  private taskResultsUrl = 'api/taskResults';
  private taskLogUrl = 'api/taskLog';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers })

  constructor(
    private http: Http,
    private logger: LoggerService
  ) { }

  getTaskData(): Observable<any> {
    this.logger.log("Getting all task data ...");

    return this.http.get(this.tasksUrl)
      .map(response => response.json().data)
      .do(tasks => this.logger.log(`Got task data`))
      .catch(error => this.handleError(error));
  }

  getTaskResults(): Observable<any> {
    this.logger.log("Getting all task results...");

    return this.http.get(this.taskResultsUrl)
      .map(response => response.json().data as string[])
      .do(taskResults => this.logger.log(`Got ${taskResults.length} task results`))
      .catch(error => this.handleError(error));
  }

  addTaskLog(operator: Operator): Observable<any> {
    let task = {
      operator: operator,
      comment: ""
    }
    this.logger.log(`Adding task log for ${operator.firstName} via Http`);
    return this.http.post(this.taskLogUrl, task, this.options)
      .do(response => this.logger.log(`Added to task log with ${JSON.stringify(response)}`))
      .catch(error => this.handleError(error));
  }

  updateTaskLog(task: Task): Observable<any> {
    let url = `${this.taskLogUrl}/${task.id}`;
    this.logger.log(`Updating task log for ${JSON.stringify(task)} via Http`);
    return this.http.put(url, task, this.options)
      .do(response => this.logger.log(`Updated task log with ${JSON.stringify(response)}`))
      .catch(error => this.handleError(error));
  }

  getTaskLog(): Observable<Task[]> {
    return this.http.get(this.taskLogUrl)
      .map(response => response.json().data as Task[])
      .do(taskLog => this.logger.log(`Got ${taskLog.length} task logs: ${JSON.stringify(taskLog)}`))
      .catch(error => this.handleError(error));
  }

  private handleError(error: any): Observable<any> {
    this.logger.log(`An error occurred: ${error}`);
    // re-throw user-facing message
    return Observable.throw('Something bad happened; please check the console');
  }

}