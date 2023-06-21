import { useWeb3React } from "@web3-react/core";
import { BINANCE_WALLET, METAMASK_WALLET } from "../../constants/wallet";
import YourApp from "../YourApp/YourApp";
import useConnectWallets from "./useConnectWallets";
import { Button, Form, Input } from 'antd';
import styles from './ConnectWallet.module.css';

export const supportedChainIdsMeta = [1, 3, 4, 5, 42];
export const supportedChainIdsBena = [1, 3, 4, 5, 42];

export default function ConnectWallets() {
  const [showButtons, connectWallet, handleClick] = useConnectWallets();
  const { account, activate, deactivate, active, error } = useWeb3React();

  return (
    <div>
      <Button type="primary" onClick={() => handleClick(!showButtons, deactivate)} className={styles.btn}>{!showButtons ? "Connect Wallet" : "Disconect Wallet"}</Button>
      {showButtons && (
        <div>
          <Button onClick={() => connectWallet(METAMASK_WALLET, activate)} className={styles.btn}>
            Connect with MetaMask
          </Button>
          <Button onClick={() => connectWallet(BINANCE_WALLET, activate)} className={styles.btn}>
            Connect with Binance Wallet
          </Button>
        </div>
      )}
      {account && <YourApp addressWallet={account} />}
    </div>
  );
}
