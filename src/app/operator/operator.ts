import { Task } from "../task/task";
import { State } from "app/operator/state";



export interface IOperator {
    operId: number;
    firstName: string;
    lastName: string;
    assignedTask?: string;
    state: number;
}


