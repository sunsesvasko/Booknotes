import axios from 'axios';

export const deleteQuote = async(id) => {
    try{
        const res = await axios({
            method: 'DELETE',
            url: `/api/v1/quotes/${id}`
        });

        if(res.status === 204) {
            alert('Quote deleted successfully!');
            window.setTimeout(() => {
                location.reload();
            }, 100);
        }
    } catch(err) {
        alert('Error!');
        console.log(err.response.data.message);
    }
}