import Web3 from 'web3';
import { walletFinder } from './walletFinder.js';
import { openCapsuleABI } from './abis/openCapsuleABI';
import { hashGenerator } from '../helpers/hashGenerator';
import { postParticipants } from '../services/participantService';

//Detect wallet address change, accountsChaged is fired by Metamask
window.ethereum.on('accountsChanged', function (accounts) {
    currentAddress = accounts[0];
    //console.log(accounts[0])
    isAdminis = currentAddress === '0xc50E782E195a864A7f1248a28DD3554cC53AB440' ? true : false;
})

//Run once at app start or on reload
var currentAddress = walletFinder();

let isAdminis = currentAddress === '0xc50E782E195a864A7f1248a28DD3554cC53AB440' ? true : false;

const web3 = new Web3(Web3.givenProvider);
//console.log(web3)

const contractAddr = '0x844198a75f1c1fef943f12ca6041e59063a435fc';
const openCapsuleContract = new web3.eth.Contract(openCapsuleABI, contractAddr);

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
const getParticipant = () => {
    try{
        openCapsuleContract.methods.participants("0x60F36860c9D108A22383F9450D092486a3FCe8b").call((_err, res) => 
            {
                console.log(res);
                return res;
            });
    }
    catch (err) {
        console.log(err);
        alert(err.message)
    }
}

//Create participant function
const createParticipant = async(companyName, walletAdress, role, phone, email, address, country, state) => {
    //const currentAccounts = await window.web3.eth.getAccounts();
    //const currentAddress = currentAccounts[0];

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

export { getAdmin, getEvent, getParticipant, createParticipant, isAdminis };
