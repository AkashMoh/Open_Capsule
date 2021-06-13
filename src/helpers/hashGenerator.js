export const hashGenerator = async(data_as_array) => {
    
    let crypto = require('crypto');
    const hash = crypto.createHash('md5').update(JSON.stringify(data_as_array)).digest('hex');
    //test
    //console.log(hash);
    return hash;

}