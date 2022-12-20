class UserService {
    public login(request) {
        const { email, password } = request.body;
        return {
            JWT: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
        }
    }

    public signUp(request) {
        const { username, email, id } = request.body;
        return {
            username,
            email,
            id
        }
    }

    public updateInfo(request) {
        const { username, id } = request.body;
        return {
            username,
            id
        }
    }
}

export default UserService;