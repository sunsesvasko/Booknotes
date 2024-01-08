import axios from 'axios';

export const createNote = async(title, description, book) => {
    try {
        const res = await axios({
            method: 'POST',
            url: '/api/v1/notes/',
            data: {
                title,
                description, 
                book
            }
        });

        if(res.data.status === 'success') {
            alert('Note created successfully!');
            window.setTimeout(() => {
                location.reload();
            }, 100)
        };
    } catch(err) {
        console.log(err.response.data.message);
    }
};