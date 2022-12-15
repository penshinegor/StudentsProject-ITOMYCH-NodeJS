import {TypeOfHero} from '../../components/enums/heroes-enums';

const regularEmail = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const regularPassword = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;
const regularUserName = /^[a-zA-Z0-9]+$/;

const loginValidation = (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).send('Missing parameters.');
        return;
    }
    if (!email.match(regularEmail) && !password.match(regularPassword)) {
        res.send('The request cannot be fulfilled due to bad syntax.');
        return;
    }
    console.log(`Login => Email: ${email}, Password: ${password}`);
    res.json({JWT: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'});
}
const signUpValidation = (req, res) => {
    const { userName, email, password, repeatedPassword, id } = req.body;
    if (!userName || !email || !password || !repeatedPassword || !id) {
        res.status(400).send('Missing parameters.');
        return;
    }
    if (!userName.match(regularUserName) || !email.match(regularEmail) || !password.match(regularPassword)) {
        res.status(400).send('The request cannot be fulfilled due to bad syntax.');
        return;
    }
    if (password !== repeatedPassword || (Number(id) > 3 && Number(id) < 1)) {
        res.status(400).send('Wrong data.');
        return;
    }
    console.log(`Sign up => User: ${userName}, Email: ${email}, Password: ${password}, Heroes id: ${id}`);
    res.json({ username: userName, email: email, heroesId: id});
}
const updateInfoValidation = (req, res) => {
    const { userName, pastPassword, newPassword, repeatedPassword, id } = req.body;
    if (!userName || !pastPassword || !newPassword || !repeatedPassword || !id) {
        res.status(400).send('Missing parameters.');
        return;
    }
    if (!userName.match(regularUserName) || !newPassword.match(regularPassword)) {
        res.status(400).send('The request cannot be fulfilled due to bad syntax.');
        return;
    }
    if (newPassword !== repeatedPassword || (Number(id) > 3 && Number(id) < 1)) {
        res.status(400).send('Wrong data.');
        return;
    }
    console.log(`Update info => User: ${userName}, Password: ${newPassword}, Heroes id: ${id}`);
    res.json({ username: userName, heroesId: id});
}
const getListOfHeroes = (req, res) => {
    res.json({ 1: TypeOfHero.DragonWarrior, 2: TypeOfHero.Thief, 3: TypeOfHero.Wizard});
}

export {loginValidation, signUpValidation, updateInfoValidation, getListOfHeroes};