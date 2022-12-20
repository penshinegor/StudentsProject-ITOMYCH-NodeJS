import ClassService from '../services/class-service';

const classService = new ClassService();

const getListOfHeroesController = (req, res) => {
    const list = classService.getListOfHeroes();
    if (!list) {
        res.status(500).send('Getting error');
        return;
    }
    res.json(list);
}

export {getListOfHeroesController};