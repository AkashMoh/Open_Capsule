import axios from  'axios'

const fetchHistory = async(productCode, productId) => {
    try {
        //console.log("Tracking Service", productCode, productId)
        const response = await axios.get('http://localhost:3001/history', {params: {product_code: productCode}});
        //console.log("Response", response);
        return response.data;
    } catch(error) {
        console.error(error);
    }
}

const postHistory = async(product_name, product_code, company_name, unit_start, unit_end) => {
    let date_ob = new Date();
    // current date
    // adjust 0 before single digit date
    let date = ("0" + date_ob.getDate()).slice(-2);
    // current month
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    // current year
    let year = date_ob.getFullYear();
    // current hours
    let hours = date_ob.getHours();
    // current minutes
    let minutes = date_ob.getMinutes();
    // current seconds
    let seconds = date_ob.getSeconds();
    // prints date in YYYY-MM-DD format
    //console.log(year + "-" + month + "-" + date);
    // prints date & time in YYYY-MM-DD HH:MM:SS format
    let time = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;
    
    try {
        axios.post('http://localhost:3001/history', {
            time: time,
            product_name: product_name,
            product_code: product_code,
            company_name: company_name,
            unit_start: unit_start,
            unit_end: unit_end,
        })
    } catch(error) {
        console.log(error)
    }
}

export { fetchHistory, postHistory }