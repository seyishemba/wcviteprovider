import { EthereumProvider } from "@walletconnect/ethereum-provider";

// 0. Define ui elements and clients
let ethereumProvider = undefined;
const connectButton = document.getElementById("connect-button");
const switchButton = document.getElementById("switch");
const getButton = document.getElementById("getButton");

let provider 
// 1. Define constants
const projectId = import.meta.env.VITE_PROJECT_ID;
if (!projectId) {
  throw new Error("You need to provide VITE_PROJECT_ID env variable");
}

async function switchAndSend() {
  // alert('provider')
  console.log(ethereumProvider)
  let params = {
      "from": "0x241404ece26294251C74ad5d6b3239C5F58516ff",
      "to": "0x241404ece26294251C74ad5d6b3239C5F58516ff",
      "value": 0,
  }
  try { 
      let networkId = 1
      await ethereumProvider.request({ method: 'wallet_switchEthereumChain' , params: [{ chainId: '0x1' }], })


} 
  catch (error) { 
      console.error("Error:", error); 
  } 
}

async function handleProvider(p){
    console.log('connected')
    try { 
      let networkId = 1
      await ethereumProvider.request({ method: 'wallet_switchEthereumChain' , params: [{ chainId: '0x1' }], })
  } 
  catch (error) { 
      console.error("Error:", error); 
  } 

  }

// 4. Connect to provider, also handles opening and closing modal under the hood
async function onConnect() {
  try {
    connectButton.disabled = true;

    // 5. Create ethereum provider, if one doesn't exist
    if (!ethereumProvider) {
      ethereumProvider = await EthereumProvider.init({
        projectId,
        showQrModal: true,
        qrModalOptions: { themeMode: "light" },
        chains: [80001],
        optionalChains: [11155111, 421613], // chains added to optional namespaces
        methods: ["eth_sendTransaction", "personal_sign", "eth_signTransaction", "eth_sign", "eth_signTypedData", "wallet_switchEthereumChain"],
        events: ["chainChanged", "accountsChanged"],
        metadata: {
          name: "My Dapp",
          description: "My Dapp description",
          url: "http://192.168.43.97:8080",
          icons: ["http://192.168.43.97:5173/logo.png"],
        },
      });

      // 6. Set up connection listener
      ethereumProvider.on("connect", () => alert('connected!') );
      
    }

    ethereumProvider.connect();
  } catch (err) {
    console.error(err);
  } finally {
    connectButton.disabled = false;
  }
}


async function getconnection(){
  console.log(ethereumProvider)
  try { 
    async function secondtx (){
      async function thirdtx (){
        
      await  ethereumProvider.request({ method: 'eth_sendTransaction',
      // The following sends an EIP-1559 transaction. Legacy transactions are also supported.
      params: [
        {
          from: "0xa465D5E801f019d4DE6876AF8118E911316422e0", // The user's active address.
          to: "0xa465D5E801f019d4DE6876AF8118E911316422e0", // Required except during contract publications.
          value: 0, // Only required to send ether to the recipient from the initiating external account.
          gasLimit: '0x5028', // Customizable by the user during MetaMask confirmation.
          maxPriorityFeePerGas: '0x3b9aca00', // Customizable by the user during MetaMask confirmation.
          maxFeePerGas: '0x2540be400', // Customizable by the user during MetaMask confirmation.
        },
      ],
    })
        
    }
      
  
      ethereumProvider.sendAsync({ method: 'wallet_switchEthereumChain' , params: [{ chainId: '11155111' }], }, thirdtx())

    }


    ethereumProvider.sendAsync({
      method: 'eth_sendTransaction',
      // The following sends an EIP-1559 transaction. Legacy transactions are also supported.
      params: [
        {
          from: "0xa465D5E801f019d4DE6876AF8118E911316422e0", // The user's active address.
          to: "0xa465D5E801f019d4DE6876AF8118E911316422e0", // Required except during contract publications.
          value: 0, // Only required to send ether to the recipient from the initiating external account.
          gasLimit: '0x5028', // Customizable by the user during MetaMask confirmation.
          maxPriorityFeePerGas: '0x3b9aca00', // Customizable by the user during MetaMask confirmation.
          maxFeePerGas: '0x2540be400', // Customizable by the user during MetaMask confirmation.
        },
      ],
    }, secondtx())
      
} 
catch (error) { 
    console.error("Error:", error); 
} 
}

async function addNetworks(){
    // This error code indicates that the chain has not been added to MetaMask.
      try {
        await ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [
            {
              chainId: '0x11155111',
              chainName: 'Sepolia Test Network',
              rpcUrls: ['https://sepolia.infura.io/v3/'] /* ... */,
            },
          ],
        });
      } catch (addError) {
        console.log(addError)
        // handle "add" error
      }
    // handle other "switch" errors
}

async function switchNetwork(){
  let chainId = prompt('ChainID?')
    try{
      await ethereumProvider.request({ method: 'wallet_switchEthereumChain' , params: [{ chainId: chainId }], })
    }catch(error){
      console.error(error)
    }
}
async function Networks(){
  try {
    await ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: '0xaa36a7' }],
    });
  } catch (switchError) {
    // This error code indicates that the chain has not been added to MetaMask.
    if (switchError.code === 4902) {
      try {
        await ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [
            {
              chainId: '0xf00',
              chainName: '...',
              rpcUrls: ['https://...'] /* ... */,
            },
          ],
        });
      } catch (addError) {
        // handle "add" error
      }
    }
    // handle other "switch" errors
  }
}
// 6. Create connection handler
connectButton.addEventListener("click", onConnect);
switchButton.addEventListener("click", switchAndSend);
getButton.addEventListener("click", getconnection);

const addNBtn = document.getElementById("addNBtn");
const switchNBtn = document.getElementById("switchNBtn");


addNBtn.addEventListener("click", addNetworks);
switchNBtn.addEventListener("click", switchNetwork);

