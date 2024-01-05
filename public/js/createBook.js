import axios from 'axios';

export const createBook = async(title, author) => {
    try {
        const res = await axios({
            method: 'POST',
            url: '/api/v1/books/',
            data: {
                title,
                author
            }
        });

        if(res.data.status === 'success') {
            alert('Book added successfully!');
            window.setTimeout(() => {
                location.reload();
            }, 100)
        }
    } catch(err) {
        console.log(err.response.data.message);
    }
}