import Web3 from 'web3'
//import { openCapsuleABI } from './abis/openCapsuleABI'
import { openCapsuleMainABI } from './abis/openCapsuleMainABI'
import { hashGenerator } from '../helpers/hashGenerator'
import { postParticipants } from '../services/participantService'
import { postProducts } from '../services/productService'
import { postHistory } from '../services/trackingService'

const web3 = new Web3(Web3.givenProvider);

//const contractAddr = '0x844198a75f1c1fef943f12ca6041e59063a435fc';
const contractAddr2 = '0xeaf82f69c58189de98efe5b2aeb0ba8c688e72d8';
const openCapsuleContract = new web3.eth.Contract(openCapsuleMainABI, contractAddr2);

//Event manager
openCapsuleContract.events.participantCreated({}, (error, event) => {
    console.log(event);
    console.log("It came from here")
})

//Get all previous participantCreated events from contract (history)
// openCapsuleContract.getPastEvents('participantCreated', {
//     fromBlock: 0,
//     toBlock: 'latest'
// }, (error, event) => {
//     console.log(event);
//     console.log("It came from getPastEvents")
// })

//Get all events inside OpenCapsule contract
const getEvent = async()  => {
    const events = await openCapsuleContract.events;
    console.log(events);
}

//Get admin/creator of smart contract
const getAdmin = () => {
    try{
            openCapsuleContract.methods.admin().call((_err, res) => 
            {
                console.log(res);
                return res;
            });
        }
    catch (err) {
        console.log(err);
        alert(err.message);
    }
}

//Get participant according to address argument given (currenty hardcoded)
const getParticipant = async(addresss) => {
    try{
        return openCapsuleContract.methods.participants(addresss).call((_err, res) => 
            {
                //console.log(res);
                return res;
            });
    }
    catch (err) {
        console.log(err);
        alert("yep" + err.message)
    }
}

//Create participant function
const createParticipant = async(currentAddress, companyName, walletAdress, role, phone, email, address, country, state) => {

    const hashDetails = await(hashGenerator([phone, email, address, country, state]));

    //const gas = await openCapsuleContract.methods.createParticipant(companyName, walletAdress, role, hashDetails).estimateGas();
    //console.log(gas);
    try{
        openCapsuleContract.methods.createParticipant(companyName, walletAdress, role, hashDetails).send({
            from: currentAddress,
        }, (err, res) => {
            //console.log(res);
            postParticipants(companyName, walletAdress, role, phone, email, address, country, state, hashDetails);
            return(res);
        });
    }
    catch(err){
        console.log(err.code)
        alert(err.message)
    }
}

//Create product
const createProduct = async(currentAddress, companyName, productCode, productName, price, unitStart, unitEnd) => {
    const hashDetails = await(hashGenerator([currentAddress, companyName, productCode, productName, price, unitStart, unitEnd]));
    //console.log(hashDetails)

    try{
        openCapsuleContract.methods.createProduct(productCode, productName, price, unitStart, unitEnd, hashDetails).send({
            from: currentAddress,
        }, (err, res) => {
            postProducts(currentAddress, companyName, productCode, productName, price, unitStart, unitEnd, hashDetails)
            postHistory(productName, productCode, companyName, unitStart, unitEnd)
            console.log(res);
            return(res);
        });
    }
    catch(err){
        //console.log(err.code)
        alert("From createProuct : " + err.message)
    }
}

export { getAdmin, getEvent, getParticipant, createParticipant, createProduct };
