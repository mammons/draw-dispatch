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
                assignedTower: 354,
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
                assignedTower: 353,
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
                assignedTower: 383,
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
                assignedTower: 352,
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
                assignedTower: 355,
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
                assignedTower: 357,
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

        let towers =   [
                        'None',
                        '349',
                        '350',
                        '351',
                        '352',
                        '353',
                        '354',
                        '355',
                        '356',
                        '357',
                        '358',
                        '359',
                        '360',
                        '361',
                        '362',
                        '363',
                        '364',
                        '365',
                        '366',
                        '367',
                        '368',
                        '369',
                        '370',
                        '371',
                        '372',
                        '373',
                        '374',
                        '375',
                        '376',
                        '377',
                        '378',
                        '379',
                        '380',
                        '381',
                        '382',
                        '383',
                        '384'
    ];

        let taskLog = [
            {
                name: "name",
                task: "task",
                tower: '354',
                status: "status",
                result: 'result'
            },
            {
                name: "name",
                task: "task",
                tower: '354',
                status: "status",
                result: 'result'
            },
            {
                name: "name",
                task: "task",
                tower: '354',
                status: "status",
                result: 'result'
            },
            {
                name: "name",
                task: "task",
                tower: '354',
                status: "status",
                result: 'result'
            },
            {
                name: "name",
                task: "task",
                tower: '354',
                status: "status",
                result: 'result'
            },
            {
                name: "name",
                task: "task",
                tower: '354',
                status: "status",
                result: 'result'
            },
            {
                name: "name",
                task: "task",
                tower: '354',
                status: "status",
                result: 'result'
            },
            {
                name: "name",
                task: "task",
                tower: '354',
                status: "status",
                result: 'result'
            },
            {
                name: "name",
                task: "task",
                tower: '354',
                status: "status",
                result: 'result'
            },
            {
                name: "name",
                task: "task",
                tower: '354',
                status: "status",
                result: 'result'
            },
            {
                name: "name",
                task: "task",
                tower: '354',
                status: "status",
                result: 'result'
            },
            {
                name: "name",
                task: "task",
                tower: '354',
                status: "status",
                result: 'result'
            },
            {
                name: "name",
                task: "task",
                tower: '354',
                status: "status",
                result: 'result'
            },
            {
                name: "name",
                task: "task",
                tower: '354',
                status: "status",
                result: 'result'
            },
            {
                name: "name",
                task: "task",
                tower: '354',
                status: "status",
                result: 'result'
            },
            {
                name: "name",
                task: "task",
                tower: '354',
                status: "status",
                result: 'result'
            },
            {
                name: "name",
                task: "task",
                tower: '354',
                status: "status",
                result: 'result'
            },
            {
                name: "name",
                task: "task",
                tower: '354',
                status: "status",
                result: 'result'
            },
            {
                name: "name",
                task: "task",
                tower: '354',
                status: "status",
                result: 'result'
            },
            {
                name: "name",
                task: "task",
                tower: '354',
                status: "status",
                result: 'result'
            },
            {
                name: "name",
                task: "task",
                tower: '354',
                status: "status",
                result: 'result'
            },
        ];

        return { operators, tasks, taskResults, taskLog };
    }
}