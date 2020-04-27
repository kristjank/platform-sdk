export const manifest = {
	name: "Ethereum",
	ticker: "ETH",
	behaviours: {
		Client: {
			getTransaction: true,
			getTransactions: false,
			searchTransactions: false,
			getWallet: true,
			getWallets: false,
			searchWallets: false,
			getDelegate: false,
			getDelegates: false,
			getPeers: false,
			getConfiguration: false,
			getCryptoConfiguration: false,
			getFeesByNode: false,
			getFeesByType: false,
			getSyncStatus: false,
			postTransactions: true,
		},
		Crypto: {
			createTransfer: true,
			createSecondSignature: false,
			createDelegateRegistration: false,
			createVote: false,
			createMultiSignature: false,
			createIpfs: false,
			createMultiPayment: false,
			createDelegateResignation: false,
			createHtlcLock: false,
			createHtlcClaim: false,
			createHtlcRefund: false,
		},
		Identity: {
			getAddress: {
				passphrase: false,
				multiSignature: false,
				publicKey: true,
				privateKey: true,
				wif: false,
			},
			getPublicKey: {
				passphrase: false,
				multiSignature: false,
				wif: false,
			},
			getPrivateKey: {
				passphrase: false,
				wif: false,
			},
			getWIF: {
				passphrase: false,
			},
			getKeyPair: {
				passphrase: false,
				publicKey: false,
				privateKey: true,
				wif: false,
			},
		},
		Message: {
			sign: false,
			verify: false,
		},
	},
};