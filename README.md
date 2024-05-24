# Axelar RPC Block Height Fetcher

## This Node.js script fetches the latest block height from specified Axelar RPC endpoints. It makes repeated requests to the endpoints, logs the block height, and includes error handling.


## Prerequisites
Install Node.js
If Node.js is not already installed, you can install it using the following commands:
```bash 
sudo apt update && sudo apt upgrade -y
sudo apt install nodejs npm -y
```
Install Required Node.js Packages
Install the axios package using npm:
```bash 
npm install axios
```
## Setup
1. Clone the Repository:
```bash 
git clone https://github.com/YourUsername/axelar-rpc-block-height-fetcher
cd axelar-rpc-block-height-fetcher
```
2. Edit the Script:

Open the script in a text editor:

```bash 
nano index.js
```
Replace the placeholder URLs in the rpcUrls list with your own Axelar RPC endpoint URLs. Example:
```javascript
const rpcUrls = [
    'https://tm.axelar.lava.build/lava-referer-your-unique-id/',  // replace with your main-net RPC
    'https://tm.axelar-testnet.lava.build/lava-referer-your-unique-id/',  // replace with your test-net RPC
];
```
Save and exit the editor (for nano, press CTRL + X, then Y, and Enter).

## Running the Script

1. Install and Use Screen:

Install screen to run the script in a detached session:
```bash 
sudo apt install screen -y
screen -S axelar
```
2. Run the Script:

Execute the script using Node.js:
```bash 
node index.js
```
## Example Output
The script will log the latest block height from the RPC endpoint for each request. Example output:

```plaintext
Latest Block Height for https://tm.axelar.lava.build/lava-referer-your-unique-id/: 12345
```
3. Detach from the Screen Session:

Detach from the screen session without stopping the script by pressing CTRL + A, then D.

