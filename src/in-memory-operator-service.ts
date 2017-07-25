import { InMemoryDbService } from "angular-in-memory-web-api";
import { State } from "./app/operator/state";
import { Task } from "./app/task/task";

export class InMemoryOperatorService implements InMemoryDbService {
    createDb() {
        let operators = [
            {
                firstName: 'Anthony',
                lastName: 'Aguilar',
                operId: 112,
                assignedTask: Task.tasks.breakStart,
                taskStatus: Task.statuses.none,
                taskResult: Task.results.none,
                graphiteStarts: 3,
                zircStarts: 1,
                otherTasks: 8,
                state: State.active
            },
            {
                firstName: 'Mike',
                lastName: 'Biddle',
                operId: 301,
                assignedTask: Task.tasks.none,
                taskStatus: Task.statuses.none,
                taskResult: Task.results.none,
                graphiteStarts: 0,
                zircStarts: 4,
                otherTasks: 3,
                state: State.bullpen
            },
            {
                firstName: 'Gregory',
                lastName: 'Blanchard',
                operId: 202,
                assignedTask: Task.tasks.cutAndSet,
                taskStatus: Task.statuses.none,
                taskResult: Task.results.none,
                graphiteStarts: 0,
                zircStarts: 1,
                otherTasks: 6,
                state: State.active
            },
            {
                firstName: 'Will',
                lastName: 'Muschamp',
                operId: 100,
                assignedTask: Task.tasks.none,
                taskStatus: Task.statuses.none,
                taskResult: Task.results.none,
                graphiteStarts: 0,
                zircStarts: 1,
                otherTasks: 6,
                state: State.bullpen
            },
            {
                firstName: 'Turd',
                lastName: 'Ferguson',
                operId: 222,
                assignedTask: Task.tasks.none,
                taskStatus: Task.statuses.none,
                taskResult: Task.results.none,
                graphiteStarts: 0,
                zircStarts: 1,
                otherTasks: 6,
                state: State.bullpen
            },
            {
                firstName: 'Bill',
                lastName: 'Bougie',
                operId: 696,
                assignedTask: Task.tasks.none,
                taskStatus: Task.statuses.none,
                taskResult: Task.results.none,
                graphiteStarts: 0,
                zircStarts: 1,
                otherTasks: 6,
                state: State.bullpen
            }
        ];

        return { operators };
    }
}