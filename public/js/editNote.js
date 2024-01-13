import axios from 'axios';

export const editNote = async(id, data) => {
    try{
        const res = await axios({
            method: 'PATCH',
            url: `/api/v1/notes/${id}`,
            data
        })

        if(res.data.status === 'success') {
            alert('Note updated successfully!');
            window.setTimeout(() => {
                location.reload();
            }, 100); 
        }
    } catch(err) {
        alert('Error!');
        console.log(err.response.data.message);
    }
}