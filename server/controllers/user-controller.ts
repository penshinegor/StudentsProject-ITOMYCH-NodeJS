import UserService from '../services/user-service';

const userService = new UserService();

const loginController = (req, res) => {
    const JWT =  userService.login(req);
    if (!JWT) {
        res.status(500).send('Login error');
        return;
    }
    res.json(JWT);
}
const signUpController = (req, res) => {
    const user = userService.signUp(req);
    if (!user) {
        res.status(500).send('Signing up error');
        return;
    }
    res.json(user);
}
const updateInfoController = (req, res) => {
    const updateUser = userService.updateInfo(req);
    if (!updateUser) {
        res.status(500).send('Updating info error');
        return;
    }
    res.json(updateUser);
}

export {loginController, signUpController, updateInfoController};