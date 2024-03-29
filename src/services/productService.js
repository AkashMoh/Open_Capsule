import axios from  'axios'

const fetchProducts = async(address) => {
    try {
        //console.log("ProductService", address)
        const response = await axios.get('https://opencaps-backend.herokuapp.com/products', {params: {address: address}});
        //console.log("Response", response);
        return response.data;
    } catch(error) {
        console.error(error);
    }
}

const fetchAllProducts = async(address) => {
    try {
        //console.log("ProductService", address)
        const response = await axios.get('https://opencaps-backend.herokuapp.com/products/allproducts', {params: {address: address}});
        //console.log("Response", response);
        return response.data;
    } catch(error) {
        console.error(error);
    }
}

const postProducts = async(company_address, company_name, product_code, product_name, price, unit_start, unit_end, hash_details) => {
    try {
        axios.post('https://opencaps-backend.herokuapp.com/products/', {
            company_address: company_address,
            company_name: company_name, 
            product_code: product_code,
            product_name: product_name,
            price: price,
            unit_start: unit_start,
            unit_end: unit_end,
            hash_details: hash_details,
        })
    } catch(error) {
        console.error(error);
    }
}

const updateProducts = async(id, updatedQuantity) => {
    try{
        axios.post('https://opencaps-backend.herokuapp.com/products/update', {
            id: id,
            updatedQuantity: updatedQuantity,
        })
    } catch(error) {
        console.log(error)
    }
}

export { fetchProducts, fetchAllProducts, postProducts, updateProducts }