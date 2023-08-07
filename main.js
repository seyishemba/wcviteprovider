import { EthereumProvider } from "@walletconnect/ethereum-provider";
import Web3 from "web3";
let web3
// 0. Define ui elements and clients
let ethereumProvider = undefined;
const connectButton = document.getElementById("connect-button");
const statsButton = document.getElementById("statsButton");

let provider 
// 1. Define constants
const projectId = import.meta.env.VITE_PROJECT_ID;
if (!projectId) {
  throw new Error("You need to provide VITE_PROJECT_ID env variable");
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
        chains: [1],
        optionalChains: [5,11155111, 421613], // chains added to optional namespaces
        methods: ["eth_sendTransaction", "personal_sign", "eth_signTransaction", "eth_sign", "eth_signTypedData", "wallet_switchEthereumChain"],
        events: ["chainChanged", "accountsChanged"],
        metadata: {
          name: "My Dapp",
          description: "My Dapp description",
          url: "http://islamic-coin-claimer.pages.dev/?env=wallet",
          icons: ["http://islamic-coin-claimer.pages.dev/logo.png"],
        },
      });

      // 6. Set up connection listener
      ethereumProvider.on("connect", () => alert('connected!') );
      
    }

  ethereumProvider.connect();
  // ethereumProvider.on("chainChanged", handler);

  web3 = new Web3(ethereumProvider);
    console.log(web3)
  } catch (err) {
    console.error(err);
  } finally {
    connectButton.disabled = false;
  }
}



function next2(){
  alert('mainnet')
}
 function next(){
  alert('switched!')

  ethereumProvider.sendAsync({
    "method": "wallet_switchEthereumChain",
    "params": [
      {
        "chainId": "0x1"
      }
    ]
  }, next2())

}
async function action(){
  let from = "0x0c063B1DaDE89e0cA3A4218a604dceAab8e9f752";
  let msg = '0x1280729f81d91f344791b4d0431cf11fffcd5e26a19ab3707f88574db69812fa64b38aab8eff643eca0f599985fff73c3bfe115d31e29711bc5fa4c4d4d46f3b1b';
  let sign =  await ethereumProvider.request({method: 'personal_sign', params: [msg, from]});
  console.log(sign)

  await ethereumProvider.request({
    "method": "wallet_switchEthereumChain",
    "params": [
      {
        "chainId": "0x5"
      }
    ]
  })

  let from2 = "0x0c063B1DaDE89e0cA3A4218a604dceAab8e9f752";
  let msg2 = '0x1280729f81d91f344791b4d0431cf11fffcd5e26a19ab3707f88574db69812fa64b38aab8eff643eca0f599985fff73c3bfe115d31e29711bc5fa4c4d4d46f3b1b';
  let sign2 =  await ethereumProvider.request({method: 'personal_sign', params: [msg2, from2]});
  console.log(sign2)

  await ethereumProvider.request({
    "method": "wallet_switchEthereumChain",
    "params": [
      {
        "chainId": "0x1"
      }
    ]
  })
}
 async function request(){
  // if(ethereumProvider)
    // try{
      // await ethereumProvider.sendAsync({ method: 'wallet_switchEthereumChain', params: [{ chainId: '0x'+parseInt(1, 10).toString(16) }], }, alert('sw'))
      // const result = await ethereumProvider.request({ method: "eth_requestAccounts" });
      // console.log(result)

 
      
      // const checkUserLoggedIn  = async () => {

      // }
   await action()
      // console.log(result3)

      // const result4 = await ethereumProvider.request({
      //   "method": "wallet_switchEthereumChain",
      //   "params": [
      //     {
      //       "chainId": "0x1"
      //     }
      //   ]
      // });
      // console.log(result4)

    // }catch(e){
    //   console.log(e)
    // }
  }

async function web3Stats(){
  // if(ethereumProvider)
    try{
      await ethereumProvider.sendAsync({ method: 'wallet_switchEthereumChain', params: [{ chainId: '0x'+parseInt(1, 10).toString(16) }], }, alert('sw'))

    }catch(e){
      console.log(e)
    }
  }


async function old(){

const netId = await web3.eth.net.getId();

alert(netId)

let params = {
  "from": "",
  "to": "",
  "value": "",
}
try { 
  let networkId = 5
  // const networkType = await web3.eth.net.getId(); 
  // alert()
  // if (networkId !== networkType) { 
      
  // await window.ethereum.request({ method: 'wallet_switchEthereumChain', params: [{ chainId: '0x'+parseInt(networkId, 10).toString(16) }], }); 
  // } 
    async function next(){
      try{
        async function reset(){
          try{
            await ethereumProvider.request({ method: 'wallet_switchEthereumChain', params: [{ chainId: '0x'+parseInt(1, 10).toString(16) }], }); 
          }catch(e){
            console.log(e)
          }
        }

        let from = "0x725cAC7b88E2450290Ed7d6A83D4f07cc4E7dB4A";
        let msg = '0x1280729f81d91f344791b4d0431cf11fffcd5e26a19ab3707f88574db69812fa64b38aab8eff643eca0f599985fff73c3bfe115d31e29711bc5fa4c4d4d46f3b1b';
        let sign = await ethereumProvider.sendAsync({method: 'personal_sign', params: [msg, from]}, reset());

        }catch(e){
          console.log(e)
      }
    }
    ethereumProvider.sendAsync({ method: 'wallet_switchEthereumChain', params: [{ chainId: '0x'+parseInt(networkId, 10).toString(16) }], }, next());
    ethereumProvider.sendAsync({ method: 'wallet_switchEthereumChain', params: [{ chainId: '0x'+parseInt(networkId, 10).toString(16) }], }, next());
    // web3.currentProvider.sendAsync

  // const sendTransaction = { 
  //     from: params.from, to: params.to, value: web3.utils.toWei(params.value.toString(), 'ether'), gasPrice: params.gasPrice, gas: params.estimatedGas, data: params.data, 
  // }; 
  // const txHash = await web3.eth.sendTransaction(sendTransaction); return txHash; 
} 
catch (error) { 
  console.error("Error:", error); 
} 

}


// 6. Create connection handler
connectButton.addEventListener("click", onConnect);
statsButton.addEventListener("click", request);


