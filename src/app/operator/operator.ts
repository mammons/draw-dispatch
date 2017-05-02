import { Task } from "../task/task";



export interface IOperator {
    operId: number;
    firstName: string;
    lastName: string;
    assignedTask?: string;
}
