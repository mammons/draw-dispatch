import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs/RX";
import { IOperator } from "./operator";

@Injectable()
export class OperatorService {

  constructor() { }

  getOperators(): Observable<IOperator[]>{
    let subject = new Subject<IOperator[]>();
    setTimeout(() => {subject.next(OPERATORS); subject.complete(); }, 100);
    return subject;
  }
}


    const OPERATORS = [
    {
        firstName: 'Anthony',
        lastName: 'Aguilar',
        operId: 112,
        assignedTask: 'None'
    },
    {
        firstName: 'Mike',
        lastName: 'Biddle',
        operId: 301,
        assignedTask: 'None'
    },
    {
        firstName: 'Gregory',
        lastName: 'Blanchard',
        operId: 202,
        assignedTask: 'None'
    }
]
