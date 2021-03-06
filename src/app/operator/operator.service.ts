import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { LoggerService } from '../logger/logger.service';

import { Operator } from './operator';
import { State } from './state';
import { Tower } from '../tower/tower';
import { Task } from '../task/task';

@Injectable()
export class OperatorService {
    bullpenOperators: Operator[];
    activeTaskOperators: Operator[];
    private operatorsUrl = 'api/operators';
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private options = new RequestOptions({headers: this.headers});

    constructor(
        private logger: LoggerService,
        private http: Http) { }

    getOperators(): Observable<any> {
        this.logger.log('Getting all operators ...');

        return this.http.get(this.operatorsUrl)
            .map(response => response.json().data as Operator[])
            .do(operators => this.logger.log(`Got ${operators.length} operators`))
            .catch(error => this.handleError(error));
    }

    assignTaskToOperator(operator: Operator): Observable<any> {
        this.logger.log('Assigning http task to operator');
        return this.http.post(this.operatorsUrl, operator, this.options)
        .do(response => this.logger.log(`Assigned ${operator.assignedTask} to ${operator.firstName}`))
        .catch(error => this.handleError(error));
    }

    completeTaskForOperator(operator: Operator): Observable<any> {
        this.logger.log(`Completing task for operator ${operator.firstName} via Http`);

        return this.http.post(this.operatorsUrl, operator, this.options)
        .do(response => {
            this.logger.log(`Completed ${operator.assignedTask} for ${operator.firstName}`);
            this.incrementTaskCount(operator);
        })
        .catch(error => this.handleError(error));
    }

    resetOperatorAfterCompleteOrCancel(operator: Operator): void {
        this.logger.log(`Resetting ${operator}`);
        operator.assignedTask = Task.tasks.none;
        operator.assignedTower = 'None';
        operator.taskResult = Task.results.none;
        operator.taskStatus = Task.statuses.none;
        operator.state = State.bullpen;
        this.logger.log(`Reset ${operator}`);
    }

    cancelTaskForOperator(operator: Operator): Observable<any> {
        this.logger.log(`Cancelling task for ${operator.firstName} via Http`);

        return this.http.post(this.operatorsUrl, operator, this.options)
        .do(response => {
            this.logger.log(`Cancelled task ${operator.assignedTask} for ${operator.firstName}`);
        })
        .catch(error => this.handleError(error));
    }

    incrementTaskCount(operator: Operator) {
        const startArray = [Task.tasks.start, Task.tasks.breakStart, Task.tasks.reDrop] as string[];
        const graphiteTowers = Tower.graphite;
        if (startArray.includes(operator.assignedTask)) {
            if (graphiteTowers.includes(operator.assignedTower)) {
                operator.graphiteStarts++;
            }else {
                operator.zircStarts++;
            }
        }else {
            operator.otherTasks++;
        }
    }

    private handleError(error: any): Observable<any> {
        this.logger.log(`An error occurred: ${error}`);
        // re-throw user-facing message
        return Observable.throw('Something bad happened; please check the console');
    }

}



