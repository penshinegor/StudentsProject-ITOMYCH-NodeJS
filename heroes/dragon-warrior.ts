import {KindOfAdvantage} from '../components/enums/kind-of-advantage';
import {Hero} from '../components/abstract-classes/hero';

const HISTORY_OF_DRAGON_WARRIOR = 'As Sir Davion slew Slyrak in arranged combat, the Eldwurm\'s blood mingled with his own, sealing their essences together. ' +
    'He was no longer a dragon-slayer, but a Dragon Warrior. The infusion of Dragon Blood caused his wounds to heal with inhuman speed. ' +
    'While nowhere as grand as Slyrak, he found himself with the ability to hitting fire swords and defencing from physical damage.'

class DragonWarrior extends Hero {
    constructor() {
        super(
            200,
            HISTORY_OF_DRAGON_WARRIOR,
            { Attack: 'Hitting fire Swords', Ability: 'Defensing by shield from physical damage' },
            KindOfAdvantage.Strength
        )
    }

    applyAbility(): any { }
    attack(): any { }
}
