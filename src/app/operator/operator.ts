import { Task } from "../task/task";
import { State } from "app/operator/state";



export class Operator {
    operId: number;
    firstName: string;
    lastName: string;
    assignedTask?: string;
    taskStatus?: string;
    taskResult?: string;
    state: number;
}


