import { Component, OnInit } from '@angular/core';

import { OperatorService } from "./operator/operator.service";
import { Operator } from "./operator/operator";
import { State } from "./operator/state";

import { Observable } from "rxjs/Observable";
import { LoggerService } from "app/logger/logger.service";

@Component({
  selector: 'dd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  operators: Operator[];
  activeTaskOperators: Operator[] = [];
  bullpenOperators: Operator[];

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
    this.bullpenOperators = this.operators.filter(bpOper => bpOper['state'] == State.bullpen);     
    this.logger.log("Assigning bullpen operators based on state: " + this.bullpenOperators);
    
    this.activeTaskOperators = this.operators.filter(atOper => atOper['state'] == State.active);
    this.logger.log("Assigning active operators based on state: " + this.activeTaskOperators);
  }

}
