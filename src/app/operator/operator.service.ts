import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";

import { Observable } from "rxjs/Observable";
import { IOperator } from "./operator";
import { LoggerService } from "../logger/logger.service";

@Injectable()
export class OperatorService {
    bullpenOperators: IOperator[];
    activeTaskOperators: IOperator[];
    private operatorsUrl = 'api/operators';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(
        private logger: LoggerService,
        private http: Http) { }

    getBullpenOperators(): Observable<IOperator[]> {
        return
    }

    getOperators(): Observable<any> {
        this.logger.log("Getting all operators ...");

        return this.http.get(this.operatorsUrl)
        .map(response => response.json().data as IOperator[])
        .do(operators => this.logger.log(`Got ${operators.length} operators`))
        .catch(error => this.handleError(error));
    }

  private handleError(error: any): Observable<any> {
    this.logger.log(`An error occurred: ${error}`);
    // re-throw user-facing message
    return Observable.throw('Something bad happened; please check the console');
  }

}



