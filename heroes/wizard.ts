import {KindOfAdvantage} from '../components/enums/kind-of-advantage';
import {Hero} from '../components/abstract-classes/hero';

const HISTORY_OF_WIZARD = 'Carl the Wizard is the one of the few remaining magicians who still practices the ancient sorcery of Invoke, ' +
    'allowing him to harness not one, but all three elements of Quas, Wex, and Exort as well any magic he deigns to learn through sheer will, ' +
    'intelligence, and memory.';

class Wizard extends Hero {
    constructor() {
        super(
            80,
            HISTORY_OF_WIZARD,
            { Attack: 'Launching Fireballs', Ability: 'Hexing the hero' },
            KindOfAdvantage.Intelligence
        )
    }

    applyAbility(): any { }
    attack(): any { }
}
