

export const API_NOTIFICATION_MESSAGE = {
    loading: {
        title: "loading",
        message: 'data is loading'
    },

    success: {
        title: 'success',
        message: 'data successfully loaded'
    },

    responceFailure: {
        title: 'error',
        message: 'An error occured while fetching the responce from server , please try again'
    },
    requestFailure: {
        title: 'error',
        message: 'an error accured while parsing the request data'
    },
    networkError: {
        title: 'error',
        message: 'unable to connect , please check internet connectivity'

    }

}



export const SERVICE_URLS = {

    userSignup: {
        url: '/signup', method: 'POST'
    },
    userLogin: {
        url: '/login', method: 'POST'
    },
    getprofile: {
        url: '/getdetails', method: 'GET' , params : true
    },
    resetpassword: {
        url: '/reset', method: 'POST'
    },
    setpassword: {
        url: '/setpassword', method: 'POST' , params : true
    },
    addwork: {
        url: '/getwork', method: 'POST' 
    },
    getallpost: {
        url: '/getworkpost', method: 'GET' ,  params : true
    }, 
    getpostbyid: {
        url: '/post', method: 'GET' ,  query : true
    },
    deletebyid: {
        url: '/delete', method: 'DELETE' ,  query : true
    },

}