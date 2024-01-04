import axios from 'axios';

export const login = async(email, password) => {
    try {
        const res = await axios({
            method: 'POST',
            url: '/api/v1/users/login',
            data: {
                email, 
                password
            }
        });

        if(res.data.status === 'success') {
            alert('Logged in successfully')
            window.setTimeout(() => {
                location.assign('/')
            }, 1500);
        }
    } catch(err) {
        console.log(err.response.data.message);
    }
}

export const logout = async() => {
    try {
        const res = await axios({
            method: 'GET',
            url: '/api/v1/users/logout'
        });

        if(res.data.status === 'success') {
            alert('Logged out successfully')
            window.setTimeout(() => {
                location.assign('/')
            }, 1500);
        }
    } catch(err) {
        console.log('Error logging out! Try again.')
    }
}