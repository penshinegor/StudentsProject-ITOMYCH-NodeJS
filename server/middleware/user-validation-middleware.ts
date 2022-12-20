const regularEmail = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const regularPassword = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;
const regularUsername = /^[a-zA-Z0-9]+$/;

const loginValidation = (req, res, next) => {
    if (!req.body.email || !req.body.password) {
        res.status(400).send('Missing parameters.');
        return;
    }
    if (!req.body.email.match(regularEmail) || !req.body.password.match(regularPassword)) {
        res.status(400).send('The request cannot be fulfilled due to bad syntax.');
        return;
    }
    next();
}
const signUpValidation = (req, res, next) => {
    if (!req.body.username || !req.body.email || !req.body.password || !req.body.repeatedPassword || !req.body.id) {
        res.status(400).send('Missing parameters.');
        return;
    }
    if (req.body.password !== req.body.repeatedPassword || (Number(req.body.id) > 3 && Number(req.body.id) < 1)) {
        res.status(400).send('Wrong data.');
        return;
    }
    if (!req.body.username.match(regularUsername) || !req.body.email.match(regularEmail) || !req.body.password.match(regularPassword)) {
        res.status(400).send('The request cannot be fulfilled due to bad syntax.');
        return;
    }
    next();
}
const updateInfoValidation = (req, res, next) => {
    if (!req.body.username || !req.body.pastPassword || !req.body.newPassword || !req.body.repeatedPassword || !req.body.id) {
        res.status(400).send('Missing parameters.');
        return;
    }
    if (!req.body.username.match(regularUsername) || !req.body.newPassword.match(regularPassword)) {
        res.status(400).send('The request cannot be fulfilled due to bad syntax.');
        return;
    }
    if (req.body.newPassword !== req.body.repeatedPassword || (Number(req.body.id) > 3 && Number(req.body.id) < 1)) {
        res.status(400).send('Wrong data.');
        return;
    }
    next();
}

export {loginValidation, signUpValidation, updateInfoValidation};