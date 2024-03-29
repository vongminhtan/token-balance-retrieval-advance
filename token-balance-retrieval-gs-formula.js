const API_KEYS = {
    "ethereum": "<ETHEREUM_KEY_HERE>",
    "polygon": "<POLYGON_KEY_HERE>",
    "bsc": "<BSC_KEY_HERE>",
    "arbitrum": "<ARBITRUM_KEY_HERE>",
    "base": "<BASE_KEY_HERE>",
    "optimism": "<OPTIMISM_KEY_HERE>",
}

const BASE_URLS = {
    "ethereum": "https://api.etherscan.io/api",
    "polygon": "https://api.polygonscan.com/api",
    "bsc": "https://api.bscscan.com/api",
    "arbitrum": "https://api.arbiscan.io/api",
    "base": "https://api.basescan.org/api",
    "optimism": "https://api-optimistic.etherscan.io/api",
}

function GETTOKENBALANCE(contractAddress, walletAddress, network, divisor = 18) {
    network = network.toLowerCase();

    if (network === 'tron') {
        return getTronBalance(contractAddress, walletAddress, divisor);
    }

    if (network === 'avalanche') {
        return getAvalBalance(contractAddress, walletAddress, divisor);
    }

    if (network === 'solana') {
        return getSolBalance(contractAddress, walletAddress);
    }

    const url = `${ BASE_URLS[network] }?address=${ walletAddress }&contractaddress=${ contractAddress }&apikey=${ API_KEYS[network] }&module=account&action=tokenbalance&tag=latest`;

    try {
        const options = {
            method: 'GET',
            muteHttpExceptions: true
        };
        const response = UrlFetchApp.fetch(url, options);
        if (response.getResponseCode() == 200) {
            var result = JSON.parse(response.getContentText());

            if (result.status == '0') {
                return 0;
            }

            return result.result / Math.pow(10, divisor);
        }

        return 0;
    } catch (error) {
        return error && error.message || 'ERROR';
    }
}

function getTronBalance(contractAddress, walletAddress, divisor) {
    const apiUrl = `https://apilist.tronscanapi.com/api/token_trc20/holders?start=0&limit=5&contract_address=${ contractAddress }&holder_address=${ walletAddress }`;

    const fetchOptions = {
        method: 'GET',
        muteHttpExceptions: true
    };

    try {
        const response = UrlFetchApp.fetch(apiUrl, fetchOptions);
        const data = JSON.parse(response.getContentText());

        if (data.trc20_tokens && data.trc20_tokens.length > 0) {
            const balance = data.trc20_tokens[0].balance;
            return balance / Math.pow(10, divisor);
        }

        return 0;
    } catch (error) {
        return error && error.message || 'ERROR';
    }
}

function getAvalBalance(contractAddress, walletAddress, divisor) {
    const url = `https://api-beta.avascan.info/v2/network/mainnet/evm/43114/address/${ walletAddress }/erc20-holdings`;
    const options = {
        method: 'GET',
        muteHttpExceptions: true
    };

    try {
        const response = UrlFetchApp.fetch(url, options);

        if (response.getResponseCode() == 200) {
            var result = JSON.parse(response.getContentText());

            if (!result.items || (result.items && result.items.length === 0)) {
                return 0;
            }

            const tether = result.items.find(item => item.tokenAddress === contractAddress);

            if (!tether) {
                return 0;
            }

            return tether.tokenQuantity / Math.pow(10, divisor);
        }

        return 0;
    } catch (error) {
        return error && error.message || 'ERROR';
    }
}

function getSolBalance(contractAddress, walletAddress) {
    const url = `https://api.mainnet-beta.solana.com`;
    const data = {
        "jsonrpc": "2.0",
        "id": 1,
        "method": "getTokenAccountsByOwner",
        "params": [
            walletAddress,
            {
                "mint": contractAddress
            },
            {
                "encoding": "jsonParsed"
            }
        ]
    };

    const options = {
        'method': 'post',
        'muteHttpExceptions': true,
        'contentType': 'application/json',
        'payload': JSON.stringify(data)
    }

    try {
        const response = UrlFetchApp.fetch(url, options);

        if (response.getResponseCode() == 200) {
            const result = JSON.parse(response.getContentText());

            if (!result) {
                return 0;
            }

            const balance = result.result.value[0].account.data.parsed.info.tokenAmount.uiAmount;

            return balance || 0;
        }

        return 0;

    } catch (error) {
        return error && error.message || 'ERROR';
    }
}
