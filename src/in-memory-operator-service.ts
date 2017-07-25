import { InMemoryDbService } from "angular-in-memory-web-api";
import { State } from "./app/operator/state";

export class InMemoryOperatorService implements InMemoryDbService {
    createDb() {
        let operators = [
            {
                firstName: 'Anthony',
                lastName: 'Aguilar',
                operId: 112,
                assignedTask: 'None',
                state: State.active
            },
            {
                firstName: 'Mike',
                lastName: 'Biddle',
                operId: 301,
                assignedTask: 'None',
                state: State.bullpen
            },
            {
                firstName: 'Gregory',
                lastName: 'Blanchard',
                operId: 202,
                assignedTask: 'None',
                state: State.bullpen
            },
            {
                firstName: 'Will',
                lastName: 'Muschamp',
                operId: 100,
                assignedTask: 'None',
                state: State.bullpen
            },
            {
                firstName: 'Turd',
                lastName: 'Ferguson',
                operId: 222,
                assignedTask: 'None',
                state: State.bullpen
            },
            {
                firstName: 'Bill',
                lastName: 'Bougie',
                operId: 696,
                assignedTask: 'None',
                state: State.bullpen
            }
        ];

        return { operators };
    }
}