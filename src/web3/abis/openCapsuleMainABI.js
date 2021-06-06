export const openCapsuleMainABI = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "string",
                "name": "companyName",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "address payable",
                "name": "companyAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "role",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "hashDetails",
                "type": "string"
            }
        ],
        "name": "participantCreated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "productCode",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "start",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "end",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "buyer",
                "type": "address"
            }
        ],
        "name": "productBought",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "productCode",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "productName",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "hashDetails",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "address payable",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "productCreated",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "admin",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address payable",
                "name": "_seller",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_productCode",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_start",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_end",
                "type": "uint256"
            }
        ],
        "name": "buyProduct",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_companyName",
                "type": "string"
            },
            {
                "internalType": "address payable",
                "name": "_companyAddress",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "_role",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_hashDetails",
                "type": "string"
            }
        ],
        "name": "createParticipant",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_productCode",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_productName",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_price",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_unitStart",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_unitEnd",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_hashDetails",
                "type": "string"
            }
        ],
        "name": "createProduct",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "participants",
        "outputs": [
            {
                "internalType": "string",
                "name": "companyName",
                "type": "string"
            },
            {
                "internalType": "address payable",
                "name": "companyAddress",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "role",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "hashDetails",
                "type": "string"
            },
            {
                "internalType": "bool",
                "name": "created",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "products",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "productCode",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "productName",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "hashDetails",
                "type": "string"
            },
            {
                "internalType": "address payable",
                "name": "owner",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]