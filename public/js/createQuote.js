import axios from 'axios';

export const createQuote = async(data) => {
    try {
        const res = await axios({
            method: 'POST',
            url: '/api/v1/quotes/',
            data
        });
    
        if(res.data.status === 'success') {
            alert('Quote successfully created!');
            window.setTimeout(() => {
                location.reload();
            }, 100);
        };
    } catch(err) {
        console.log(err.response.data.message);
    }
};