import axios from 'axios';

export const register = async(data) => {
    try {
        const res = await axios({
            method: 'POST',
            url: '/api/v1/users/register',
            data
        })

        if(res.data.status === 'success') {
            alert('User created successfully!');
            window.setTimeout(() => {
                location.assign('/');
            }, 1000);
        }
    } catch(err) {
        // console.log(err.response.data.message);
        console.log(err);
    }
};