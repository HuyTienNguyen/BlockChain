import { useWeb3React } from "@web3-react/core";
import { injectedConnector } from "./web3";
import Web3 from "web3";

export default function YourApp() {
  const { account, activate, deactivate } = useWeb3React();
  const web3 = new Web3(window.ethereum);

  const connectWallet = () => {
    // if(window.ethereum){
    //   activate(injectedConnector);
    // } else {
    //   alert("Metamask not detected");
    // }

    web3.eth.net
      .getId()
      .then((chainId) => {
        console.log("chainId", chainId);
        // Lấy danh sách các tài khoản được kết nối với MetaMask trên chainId hiện tại
        web3.eth
          .getAccounts()
          .then((accounts) => {
            // Lấy địa chỉ của tài khoản đầu tiên trong danh sách
            const userAddress = accounts[0];
            console.log(
              "Địa chỉ của tài khoản đang được kết nối:",
              userAddress
            );
            // web3.eth
            //   .getBalance(userAddress)
            //   .then(function (balance) {
            //     console.log("Số dư của địa chỉ ví", userAddress, "là:", balance);
            //   })
            //   .catch(function (error) {
            //     console.log(error);
            //   });

            
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const disconnectWallet = () => {
    deactivate();
  };

  return (
    <div>
      {!account && <button onClick={connectWallet}>Connect Wallet</button>}
      {account && (
        <div>
          <p>Current account: {account}</p>
          <button onClick={disconnectWallet}>Disconnect Wallet</button>
        </div>
      )}
    </div>
  );
}
