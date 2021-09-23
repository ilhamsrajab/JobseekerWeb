export default {
    login() {},
    signup(context, payload) {
        fetch('http://127.0.0.1:8000/api/register')
    }
};