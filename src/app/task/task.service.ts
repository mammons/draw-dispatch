import { Injectable } from '@angular/core';

@Injectable()
export class TaskService {

  constructor() { }

  getTasks(): string[]{
    return TASKS;
  }

}

const TASKS = ['Cut & set ink',
        'Start',
        'Break start',
        'Dancer break',
        'Catch',
        'Re-drop',
        'Graphite Ink',
        'Graphite Spool',
        'Cleaning',
        'Shift break',
        'Break',
        'Lunch',
        'Other'
    ];
