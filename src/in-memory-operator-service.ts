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
                graphiteStarts: 0,
                zircStarts: 0,
                otherTasks: 0,
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
                zircStarts: 0,
                otherTasks: 0,
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
                zircStarts: 0,
                otherTasks: 0,
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
                zircStarts: 0,
                otherTasks: 0,
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
                zircStarts: 0,
                otherTasks: 0,
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
                zircStarts: 0,
                otherTasks: 0,
                state: State.bullpen
            }
        ];

        let tasks = ['Cut & set ink',
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

        let taskResults = ['None',
            'Good fiber',
            'Break before good fiber',
            'Jammed die',
            'Burn out',
            'Tower problem',
            'Blown UV',
            'Cancelled', 'Other'
        ];

        let taskLog = [];

        return { operators, tasks, taskResults, taskLog };
    }
}