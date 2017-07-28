import { State } from 'app/operator/state';
import { Task } from '../task/task';

export class Operator {
    operId: number;
    firstName: string;
    lastName: string;
    assignedTask?: string;
    assignedTower: string;
    taskStatus?: string;
    taskResult?: string;
    graphiteStarts?: number;
    zircStarts?: number;
    otherTasks?: number;
    state: number;
}


