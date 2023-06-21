import Web3 from "web3";
import { injectedConnector, supportedChainIdsArray } from "../../web3";
import { useState } from "react";

function useConnectWallets() {
  const web3 = new Web3(window.ethereum);
  const [showButtons, setShowButtons] = useState(false);

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

  const disconnectWallet = (deactivate) => {
    deactivate();
  };

  async function getChainIdCurrent() {
    try {
      const chainId = await window.ethereum.request({ method: "eth_chainId" });
      return parseInt(chainId, 16);
    } catch (error) {
      console.error(error);
    }
  }

  const handleClick = (isDisplay, deactivate) => {
    isDisplay == false && disconnectWallet(deactivate);
    setShowButtons(isDisplay);
  };

  return [showButtons, connectWallet, disconnectWallet, handleClick];
}

export default useConnectWallets;
