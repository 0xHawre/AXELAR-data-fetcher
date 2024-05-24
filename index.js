const axios = require('axios');

async function callRpcAxelar(url) {
    try {
        const { data } = await axios({
            method: 'POST',
            url,
            data: {
                jsonrpc: '2.0',
                id: '1',
                method: 'status',
            },
        });

        console.log(`Latest Block Height for ${url}: ${data.result.sync_info.latest_block_height}`);
    } catch (error) {
        console.error(`Error fetching latest Axelar block for ${url}:`, error.message);
    }
}

// Your RPC URLs main-net and test-net 
const rpcUrls = [
    'https://tm.axelar.lava.build/lava-referer-b3ebd262-006d-4555-8273-6d1508c4e92d/',
    'https://tm.axelar-testnet.lava.build/lava-referer-b3ebd262-006d-4555-8273-6d1508c4e92d/',

];

// Call the RPC endpoints with a delay of 10 seconds between each call
async function callAllRpcAxelar(urls, delay) {
    while (true) {
        for (const url of urls) {
            await callRpcAxelar(url);
            await new Promise(resolve => setTimeout(resolve, delay * 1000)); // Convert seconds to milliseconds
        }
    }
}

callAllRpcAxelar(rpcUrls, 10); // Call the RPC endpoints with a delay of 10 seconds forever
