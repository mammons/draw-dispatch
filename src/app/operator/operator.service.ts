import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs/RX";
import { IOperator } from "./operator";

@Injectable()
export class OperatorService {

  constructor() { }

  getOperators(): IOperator[]{
    return OPERATORS;
  }
}


    const OPERATORS = [
    {
        firstName: 'Anthony',
        lastName: 'Aguilar',
        operId: 112,
        assignedTask: 'None',
        currentState: 'bullpen',
        inBullpen: true
    },
    {
        firstName: 'Mike',
        lastName: 'Biddle',
        operId: 301,
        assignedTask: 'None',
        currentState: 'bullpen',
        inBullpen: false
    },
    {
        firstName: 'Gregory',
        lastName: 'Blanchard',
        operId: 202,
        assignedTask: 'None',
        currentState: 'bullpen',
        inBullpen: true
    }
]
