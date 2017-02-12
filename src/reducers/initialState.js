export default {
    auth: {
        authenticated: (localStorage.getItem('laravel_user_token') !== null),
        userinfo: {
            memberID: '',
            name: '',
            email: '',
            gender: '',
        },
        error:""
    },
    comp: {
        openDrawerStatus: false, // state of Drawer toggle in MUIAppBar
        setupTabTitles: [],
    },
    setup:{
        periodData: {
            periodeName: '',
            startDate: '',
            endDate: '',
            remark: ''
        },
    }
};