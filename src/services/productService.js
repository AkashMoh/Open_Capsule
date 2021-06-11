import axios from  'axios'

const fetchProducts = async(address) => {
    try {
        console.log("ProductService", address)
        const response = await axios.get('http://localhost:3001/products', {params: {address: address}});
        console.log("Response", response);
        return response.data;
    } catch(error) {
        console.error(error);
    }
}

const fetchAllProducts = async() => {
    try {
        //console.log("ProductService", address)
        const response = await axios.get('http://localhost:3001/products/allproducts');
        console.log("Response", response);
        return response.data;
    } catch(error) {
        console.error(error);
    }
}

const postProducts = async(company_address, company_name, product_code, product_name, price, unit_start, unit_end, hash_details) => {
    try {
        axios.post('http://localhost:3001/products/', {
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

export { fetchProducts, fetchAllProducts, postProducts }