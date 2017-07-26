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

  updateTaskLog(operator: Operator): Observable<any> {
    var body = {
      name: `${operator.firstName} ${operator.lastName}`,
      task: operator.assignedTask,
      tower: operator.assignedTower,
      status: operator.taskStatus,
      result: operator.taskResult
    }
    this.logger.log(`Updating task log for ${operator.firstName} via Http`);
    return this.http.post(this.taskLogUrl, body, this.options)
      .do(response => this.logger.log(`Updated task log with ${JSON.stringify(body)}`))      
      .catch(error => this.handleError(error));
  }

  getTaskLog(): Observable<string[]>{
      return this.http.get(this.taskLogUrl)
      .map(response => response.json().data as string[])
      .do(taskLog => this.logger.log(`Got ${taskLog.length} task logs`))
      .catch(error => this.handleError(error));
  }

  private handleError(error: any): Observable<any> {
    this.logger.log(`An error occurred: ${error}`);
    // re-throw user-facing message
    return Observable.throw('Something bad happened; please check the console');
  }

}