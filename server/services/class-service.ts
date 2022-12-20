import {TypeOfHero} from '../../components/enums/heroes-enums';

class ClassService {
    public getListOfHeroes() {
        return {
            1: TypeOfHero.DragonWarrior,
            2: TypeOfHero.Thief,
            3: TypeOfHero.Wizard
        }
    }
}

export default ClassService;