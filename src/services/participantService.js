import axios from  'axios'
//import useState from 'react'

// function handleChange() {
//     const [companycount, setCompanyCount] = useState(true);
// }

// const handleChange = () => {
//     setCompanyCount(!companycount);
// }

const fetchParticipants = async() => {
    try {
        const response = await axios.get('https://opencaps-backend.herokuapp.com/participants/');
        //console.log(response.data);
        return response.data;
    } catch(error) {
        console.error(error);
    }
}

const postParticipants = async(company_name, wallet_address, role, phone, email, address, country, state, hash_details) => {
    try {
        axios.post('https://opencaps-backend.herokuapp.com/participants/', {
            company_name: company_name, 
            wallet_address: wallet_address, 
            role: role,
            phone: phone,
            email: email, 
            address: address, 
            country: country, 
            state: state,
            hash_details: hash_details,
        })
    } catch(error) {
        console.error(error);
    }
}

//console.log(fetchParticipants((err, res) => {return res.PromisResult}));
//console.log(fetchParticipants().then(console.log));
export { fetchParticipants, postParticipants };