import {TypeOfHero} from '../../components/enums/heroes-enums';
import DragonWarrior from '../../heroes/dragon-warrior';
import Thief from '../../heroes/thief';
import Wizard from '../../heroes/wizard';
import Hero from '../../components/abstract-classes/hero';

class HeroesProvider {
    public static createHero(typeOfHero: TypeOfHero): Hero {
        if (typeOfHero === TypeOfHero.DragonWarrior) {
            return new DragonWarrior();
        } else if (typeOfHero === TypeOfHero.Thief) {
            return new Thief();
        } else {
            return new Wizard();
        }
    }
}

export default HeroesProvider;