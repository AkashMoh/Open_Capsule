import axios from 'axios'

//get dashboard data
const fetchDashboard = async(wallet_address) => {
    try {
        const response = await axios.get('https://opencaps-backend.herokuapp.com/dashboard', {params: {address: wallet_address}});
        return response.data[0];
    } catch(error) {
        console.error(error);
    }
}

//to create dashboard on intitial participant creation
const createDashboard = async(wallet_address) => {
    try {
        axios.post('https://opencaps-backend.herokuapp.com/dashboard/', {
            address: wallet_address,
        })
    } catch(error) {
        console.error(error);
    }
}

const updateInventory = async(wallet_address, product_name, product_quantity) => {
    try {
        axios.post('https://opencaps-backend.herokuapp.com/dashboard/updateInventory/', {
            address: wallet_address,
            name: product_name,
            quantity: product_quantity
        })
    } catch(error) {
        console.log(error);
    }
}

const editInventory = async(wallet_address, product_name, product_quantity) => {
    try {
        axios.post('https://opencaps-backend.herokuapp.com/dashboard/editInventory/', {
            address: wallet_address,
            name: product_name,
            quantity: product_quantity
        })
    } catch(error) {
        console.log(error);
    }
}

export { fetchDashboard, createDashboard, updateInventory, editInventory } 