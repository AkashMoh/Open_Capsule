export const openCapsuleABI = [

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
	}
]