import Web3 from 'web3';

async function walletFinder() {
    
    //Check for ethereum enabled browser
    if(window.ethereum) {
        window.web3 = new Web3(window.ethereum)
        await window.ethereum.enable()
    }
    //Check for injected web3 (Metamask)
    else if(window.web3) {
        window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
        window.alert('Non-Ethereum browser detected. You should try metamask')
    }

    const accounts = await window.web3.eth.getAccounts()
    console.log(accounts[0]);
    return accounts[0];

}

export { walletFinder };