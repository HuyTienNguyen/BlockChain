import { useState } from "react";
import Web3 from "web3";
import { injectedConnector, supportedChainIdsArray } from "../../web3";

function useYourApp() {
  const web3 = new Web3(window.ethereum);
  const [balance, setBalance] = useState(null);

  const disconnectWallet = (deactivate) => {
    deactivate();
    setBalance(null);
  };

  const connectWallet = async (activate) => {
    if (window.ethereum) {
      const chainIdCurrent = await getChainIdCurrent() || 1;
      const isChainIdExists = supportedChainIdsArray.includes(chainIdCurrent);
      const connector = injectedConnector(!isChainIdExists ? chainIdCurrent : null);
      activate(connector);
    } else {
      alert("Metamask not detected");
    }
  };

  async function getChainIdCurrent() {
    try {
      const chainId = await window.ethereum.request({ method: "eth_chainId" });
      return parseInt(chainId, 16);
    } catch (error) {
      console.error(error);
    }
  }

  const getAccountBalance = async (addressWallet) => {
    const currentBalance = await web3.eth.getBalance(addressWallet);
    const balanceInEther = Web3.utils.fromWei(currentBalance, 'ether');
    setBalance(balanceInEther);
  };

  return [balance, disconnectWallet, connectWallet, getAccountBalance];
}

export default useYourApp;
