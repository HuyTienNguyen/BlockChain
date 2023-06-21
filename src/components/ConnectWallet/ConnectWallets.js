import { BscConnector } from "@binance-chain/bsc-connector";
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import { useState } from "react";
import useConnectWallets from "./useConnectWallets";

export const supportedChainIdsMeta = [1, 3, 4, 5, 42];
export const supportedChainIdsBena = [1, 3, 4, 5, 42];

export default function ConnectWallets() {
  const [showButtons, connectWallet, disconnectWallet, handleClick] = useConnectWallets();
  const [activeConnector, setActiveConnector] = useState(null);
  const { account, activate, deactivate, active, error } = useWeb3React();

  const connectToMetaMask = () => {
    console.log("check metamask");
    const injected = new InjectedConnector({
      supportedChainIds: [1, 3, 4, 5, 42],
    });
    activate(injected);
    setActiveConnector(injected);
  };

  const connectToBinance = () => {
    const bscConnector = new BscConnector({ supportedChainIds: [1, 56, 97] });
    activate(bscConnector);
    setActiveConnector(bscConnector);
  };

  return (
    <div>
      <button onClick={() => handleClick(!showButtons, deactivate)}>Connect Wallet</button>
      {showButtons && (
        <div>
          <button onClick={connectToMetaMask}>Connect with MetaMask</button>
          <button onClick={connectToBinance}>
            Connect with Binance Wallet
          </button>
        </div>
      )}
      {account && <p>Dia chi vi: {account}</p>}
      {/* {active && (
        <div>
          <p>Connected with {activeConnector instanceof InjectedConnector && activeConnector != null ? 'MetaMask' : 'Binance Wallet'}</p>
          <button onClick={disconnectWallet}>Disconnect</button>
        </div>
      )} */}
      {error && <p>Error: {error.message}</p>}
    </div>
  );
}
