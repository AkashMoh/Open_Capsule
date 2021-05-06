import axios from  'axios'

const fetchParticipants = async() => {
    try {
        const response = await axios.get('http://localhost:3001/participants/');
        //console.log(response.data);
        return response.data;
    } catch(error) {
        console.error(error);
    }
}

//console.log(fetchParticipants((err, res) => {return res.PromisResult}));
//console.log(fetchParticipants().then(console.log));
export { fetchParticipants };