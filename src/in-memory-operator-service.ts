import { InMemoryDbService } from 'angular-in-memory-web-api';
import { State } from './app/operator/state';
import { Task } from './app/task/task';

export class InMemoryOperatorService implements InMemoryDbService {
    createDb() {
        const operators = [
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
                // state: State.active
                // state: State.bullpen
                state: State.available
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
                // state: State.active
                // state: State.bullpen
                state: State.available
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
                // state: State.active
                // state: State.bullpen
                state: State.available
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
                // state: State.active
                // state: State.bullpen
                state: State.available
            },
            {
                firstName: 'Fergie',
                lastName: 'Ferguson',
                operId: 222,
                assignedTask: Task.tasks.none,
                assignedTower: 355,
                taskStatus: Task.statuses.none,
                taskResult: Task.results.none,
                graphiteStarts: 0,
                zircStarts: 0,
                otherTasks: 0,
                // state: State.active
                // state: State.bullpen
                state: State.available
            },
            {
                firstName: 'Carl',
                lastName: 'Sagen',
                operId: 411,
                assignedTask: Task.tasks.none,
                assignedTower: 'None',
                taskStatus: Task.statuses.none,
                taskResult: Task.results.none,
                graphiteStarts: 0,
                zircStarts: 0,
                otherTasks: 0,
                // state: State.active
                // state: State.bullpen
                state: State.available
            },
            {
                firstName: 'Bill',
                lastName: 'Bougie',
                operId: 803,
                assignedTask: Task.tasks.none,
                assignedTower: 'None',
                taskStatus: Task.statuses.none,
                taskResult: Task.results.none,
                graphiteStarts: 0,
                zircStarts: 0,
                otherTasks: 0,
                // state: State.active
                // state: State.bullpen
                state: State.available
            },
            {
                firstName: 'Doug',
                lastName: 'Billgie',
                operId: 803,
                assignedTask: Task.tasks.none,
                assignedTower: 'None',
                taskStatus: Task.statuses.none,
                taskResult: Task.results.none,
                graphiteStarts: 0,
                zircStarts: 0,
                otherTasks: 0,
                // state: State.active
                // state: State.bullpen
                state: State.available
            },
            {
                firstName: 'John',
                lastName: 'Bougie',
                operId: 803,
                assignedTask: Task.tasks.none,
                assignedTower: 'None',
                taskStatus: Task.statuses.none,
                taskResult: Task.results.none,
                graphiteStarts: 0,
                zircStarts: 0,
                otherTasks: 0,
                // state: State.active
                // state: State.bullpen
                state: State.available
            },
            {
                firstName: 'Dabby',
                lastName: 'McDab',
                operId: 803,
                assignedTask: Task.tasks.none,
                assignedTower: 'None',
                taskStatus: Task.statuses.none,
                taskResult: Task.results.none,
                graphiteStarts: 0,
                zircStarts: 0,
                otherTasks: 0,
                // state: State.active
                // state: State.bullpen
                state: State.available
            },
            {
                firstName: 'Hulk',
                lastName: 'Hogan',
                operId: 418,
                assignedTask: Task.tasks.none,
                assignedTower: 'None',
                taskStatus: Task.statuses.none,
                taskResult: Task.results.none,
                graphiteStarts: 0,
                zircStarts: 0,
                otherTasks: 0,
                // state: State.active
                // state: State.bullpen
                state: State.available
            },

        ];

        const tasksJson = [
            {
                tasks: [
                    'Cut & set ink',
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
                ],
                taskResults: [
                    'None',
                    'Good fiber',
                    'Break before good fiber',
                    'Jammed die',
                    'Burn out',
                    'Tower problem',
                    'Blown UV',
                    'Cancelled', 'Other'
                ],
                towers: {
                    graphite: [
                        '358',
                        '373',
                        '374',
                        '375',
                        '376',
                        '377',
                        '378',
                        '379',
                        '380',
                        '382',
                        '384'
                    ],
                    zirconia: [
                        '349',
                        '350',
                        '351',
                        '352',
                        '353',
                        '354',
                        '355',
                        '356',
                        '357',
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
                        '381',
                        '383'
                    ],
                    all: [
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
                    ]
                }
            }
        ];

        const taskLog = [
            // {operator:{
            //     firstName: 'Anthony',
            //     lastName: 'Aguilar',
            //     operId: 112,
            //     assignedTask: Task.tasks.breakStart,
            //     assignedTower: 354,
            //     taskStatus: Task.statuses.complete,
            //     taskResult: Task.results.goodFiber,
            //     graphiteStarts: 0,
            //     zircStarts: 0,
            //     otherTasks: 0,
            //     // state: State.active
            //     // state: State.bullpen
            //     state: State.available},
            //     comment: "",
            //     id:1
            // }
        ];

        return { operators, tasksJson, taskLog };
    }
}
