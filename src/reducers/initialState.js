export default {
    auth: {
        authenticated: (localStorage.getItem('laravel_user_token') !== null),
        userinfo: {
            name: null
        },
        error:""
    }
};