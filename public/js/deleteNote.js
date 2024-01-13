import axios from 'axios';

export const deleteNote = async(id) => {
    try {
        const res = await axios({
            method: 'DELETE',
            url: `/api/v1/notes/${id}`
        });

        if(res.status === 204) {
            alert('Note deleted successfully!');
            window.setTimeout(() => {
                location.reload();
            }, 100);
        }
    } catch(err) {
        alert('Error!');
        console.log(err.response.data.message);
    }
}