import { useWeb3React } from "@web3-react/core";
import { BINANCE_WALLET, METAMASK_WALLET } from "../../constants/wallet";
import YourApp from "../YourApp/YourApp";
import useConnectWallets from "./useConnectWallets";

export const supportedChainIdsMeta = [1, 3, 4, 5, 42];
export const supportedChainIdsBena = [1, 3, 4, 5, 42];

export default function ConnectWallets() {
  const [showButtons, connectWallet, handleClick] = useConnectWallets();
  const { account, activate, deactivate, active, error } = useWeb3React();

  return (
    <div>
      <button onClick={() => handleClick(!showButtons, deactivate)}>
        Connect Wallet
      </button>
      {showButtons && (
        <div>
          <button onClick={() => connectWallet(METAMASK_WALLET, activate)}>
            Connect with MetaMask
          </button>
          <button onClick={() => connectWallet(BINANCE_WALLET, activate)}>
            Connect with Binance Wallet
          </button>
        </div>
      )}
      {account && <YourApp addressWallet={account} />}
    </div>
  );
}
