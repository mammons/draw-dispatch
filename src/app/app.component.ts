import { Component, OnInit } from '@angular/core';

import { OperatorService } from "./operator/operator.service";
import { IOperator } from "./operator/operator";
import { State } from "./operator/state";

import { Observable } from "rxjs/Observable";
import { LoggerService } from "app/logger/logger.service";

@Component({
  selector: 'dd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  operators: IOperator[];
  activeTaskOperators: IOperator[] = [];
  bullpenOperators: IOperator[];

  constructor(private operatorService: OperatorService,
    private logger: LoggerService) { }

  ngOnInit() {
    this.getOperators();

  }


  getOperators() {
    this.operatorService.getOperators()
      .subscribe(
      opers => {
        this.operators = opers;
        this.assignOperators();
      })
  }

  assignOperators() {
    this.logger.log("Assigning operators based on inBullpen flag");
    this.bullpenOperators = this.operators.filter(bpOper => {
      bpOper['state'] == State.bullpen
      this.logger.log(bpOper.toString);
    });

  }

  addOperatorToActiveTasks(operator: IOperator): void {
    console.log(`Adding ${operator.firstName} to active task array`);
    this.activeTaskOperators.push(operator);
    this.bullpenOperators = this.bullpenOperators.filter(oper => oper !== operator);
  }

}
