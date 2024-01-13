import axios from 'axios';

export const editQuote = async(id, data) => {
    try{
        const res = await axios({
            method: 'PATCH',
            url: `/api/v1/quotes/${id}`,
            data
        })

        if(res.data.status === 'success') {
            alert('Quote updated successfully!');
            window.setTimeout(() => {
                location.reload();
            }, 100)
        }
    } catch(err) {
        alert('Error!');
        console.log(err.response.data.message);
    }
}