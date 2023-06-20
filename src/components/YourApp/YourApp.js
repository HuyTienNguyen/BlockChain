import { useWeb3React } from "@web3-react/core";
import useYourApp from "./useYourApp";

export default function YourApp() {
  const { account, activate, deactivate } = useWeb3React();
  const [balance, disconnectWallet, connectWallet, getAccountBalance] = useYourApp();

  return (
    <div>
      {!account && <button onClick={() => connectWallet(activate)}>Connect Wallet</button>}
      {account && (
        <div>
          <p>Current account: {account}</p>
          {balance && <p>Current balance: {balance}</p>}
          <button onClick={() => getAccountBalance(account)}>Get Balance</button>
          <button onClick={() => disconnectWallet(deactivate)}>Disconnect Wallet</button>
        </div>
      )}
    </div>
  );
}
