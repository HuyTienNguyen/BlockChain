import { useState } from "react";
import Web3 from "web3";
import { BINANCE_WALLET, METAMASK_WALLET } from "../../constants/wallet";
import { injectedConnector, supportedChainIdsArray } from "../../web3";

function useConnectWallets() {
  const web3 = new Web3(window.ethereum);
  const [showButtons, setShowButtons] = useState(false);

  const connectWallet = async (typeWallet, activate) => {
    switch (typeWallet) {
      case METAMASK_WALLET:
        if (window.ethereum) {
          const chainIdCurrent =
            (await getChainIdCurrent(METAMASK_WALLET)) || 1;
          const isChainIdExists =
            supportedChainIdsArray.includes(chainIdCurrent);
          const connector = injectedConnector(
            METAMASK_WALLET,
            !isChainIdExists ? chainIdCurrent : null
          );
          activate(connector);
        } else {
          alert("Metamask not detected");
        }
        break;
      case BINANCE_WALLET:
        if (window.BinanceChain) {
          const chainIdCurrent = (await getChainIdCurrent(BINANCE_WALLET)) || 1;
          const isChainIdExists =
            supportedChainIdsArray.includes(chainIdCurrent);
          const connector = injectedConnector(
            BINANCE_WALLET,
            !isChainIdExists ? chainIdCurrent : null
          );
          activate(connector);
        } else {
          alert("Binance not detected");
        }
        break;
      default:
        alert("Vi nay chua duoc ho tro");
    }
  };

  const disconnectWallet = (deactivate) => {
    deactivate();
  };

  async function getChainIdCurrent(typeWallet) {
    let chainId;
    try {
      switch (typeWallet) {
        case METAMASK_WALLET:
          const chainIdMetamask = await window.ethereum.request({ method: "eth_chainId" });
          chainId = parseInt(chainIdMetamask, 16);
          break;
        case BINANCE_WALLET:
          const binanceWeb3 = new Web3(window.BinanceChain);
          const chainIdBinance = await binanceWeb3.eth.getChainId();
          chainId = parseInt(chainIdBinance);
          break;
        default:
          alert("error");
      }
    } catch (error) {
      console.error(error);
    }
    return chainId;
  }

  const handleClick = (isDisplay, deactivate) => {
    isDisplay == false && disconnectWallet(deactivate);
    setShowButtons(isDisplay);
  };

  return [showButtons, connectWallet, handleClick];
}

export default useConnectWallets;
