import Web3 from 'web3';
import { walletFinder } from './walletFinder.js';
import { openCapsuleABI } from './abis/openCapsuleABI';
import { hashGenerator } from '../helpers/hashGenerator';

//detect wallet address change
window.ethereum.on('accountsChanged', function (accounts) {
    walletFinder();
})

walletFinder();

const web3 = new Web3(Web3.givenProvider);
//console.log(web3)

const contractAddr = '0x844198a75f1c1fef943f12ca6041e59063a435fc';
const openCapsuleContract = new web3.eth.Contract(openCapsuleABI, contractAddr);

const getAdmin = async () => {
    openCapsuleContract.methods.admin().call(function (err, res) {
        if(err){
            console.log("An error occurred", err)
            return
        }
        console.log("getadmin");
        return res;
    });
}

const getParticipant = () => {
    try{
        openCapsuleContract.methods.participants("0x60F36860c9D108A22383F9450D092486a3FCe8b").call((err, res) => 
            {
            console.log(res);
            return res;
            });
    }
    catch (err) {
        console.log(err);
        alert("Cannot find participant")
    }
}

const createParticipant = async(companyName, walletAdress, role, phone, email, address, country, state) => {
    const currentAccounts = await window.web3.eth.getAccounts();
    const currentAddress = currentAccounts[0];

    const hashDetails = await(hashGenerator([phone, email, address, country, state]));

    //const gas = await openCapsuleContract.methods.createParticipant(companyName, walletAdress, role, hashDetails).estimateGas();
    //console.log(gas);
    try{
        openCapsuleContract.methods.createParticipant(companyName, walletAdress, role, hashDetails).send({
            from: currentAddress,
        }, (err, res) => {
            //console.log(res);
            return(res);
        });
    }
    catch(err){
        console.log(err)
        alert('You cannot submit an incomplete form')
    }
}

export { getAdmin, getParticipant, createParticipant };
