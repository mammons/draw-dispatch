import { Operator } from '../operator/operator';

export class Task {


  static tasks = {
    none: 'None',
    cutAndSet: 'Cut & Set Ink',
    start: 'Start',
    breakStart: 'Break start',
    dancerBreak: 'Dancer break',
    catch: 'Catch',
    reDrop: 'Re-drop',
    graphiteInk: 'Graphite Ink',
    graphiteSpool: 'Graphite Spool',
    cleaning: 'Cleaning',
    shiftBreak: 'Shift break',
    break: 'Break',
    lunch: 'Lunch',
    other: 'Other'
  };

  static statuses = {
    none: 'None',
    complete: 'COMP',
    cancel: 'CNCL'
  };

  static results = {
    none: 'None',
    goodFiber: 'Good fiber',
    breakBeforeGoodFiber: 'Break before good fiber',
    jammedDie: 'Jammed die',
    burnOut: 'Burn out',
    towerProblem: 'Tower problem',
    blownUV: 'Blown UV',
    cancelled: 'Cancelled',
    other: 'Other'
  };


  id: number;
  operator: Operator;
  comment: string;


constructor(operator: Operator){
  this.operator = operator;
  this.comment = '';
}
}
