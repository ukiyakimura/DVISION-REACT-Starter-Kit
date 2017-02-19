export default {
    auth: {
        authenticated: (localStorage.getItem('laravel_user_token') !== null),
        userInfo: {
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
        api: {
            isLoading: false,
            error: false,
            warning: null,
        }
    },
    setup:{
        periodData: [{
            periodName: '',
            startDate: null,
            endDate: null,
            remark: '',
            isActive: ''
        }],
        api: {
            isLoading: false,
            error: false,
            warning: null,
        }
    }
};