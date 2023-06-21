import { useState } from "react";
import Web3 from "web3";

function useYourApp() {
  const web3 = new Web3(window.ethereum);
  const [balance, setBalance] = useState(null);

  const getAccountBalance = async (addressWallet) => {
    const currentBalance = await web3.eth.getBalance(addressWallet);
    const balanceInEther = Web3.utils.fromWei(currentBalance, "ether");
    setBalance(balanceInEther);
  };

  return [balance, getAccountBalance];
}

export default useYourApp;
