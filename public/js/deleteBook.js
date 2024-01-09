import axios from 'axios';

export const deleteBook = async(id) => {
    try {
        const res = await axios({
            method: 'DELETE',
            url: `/api/v1/books/${id}`,
        });

        if(res.status === 204) {
            alert('Book successfully deleted!');
            window.setTimeout(() => {
                location.assign('/books');
            }, 100);
        };
    } catch(err) {
        console.log(err);
    }
}