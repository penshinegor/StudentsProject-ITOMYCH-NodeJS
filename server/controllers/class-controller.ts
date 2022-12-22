import ClassService from '../services/class-service';

const classService = new ClassService();

class ClassController {
    public getListOfHeroesController = (req, res) => {
        const list = classService.getListOfHeroes();
        if (!list) {
            res.status(500).send('Getting error');
            return;
        }
        res.json(list);
    }
}

export default ClassController;