import { useEffect } from "react";
import useYourApp from "./useYourApp";

export default function YourApp(props) {
  const [balance, getAccountBalance] = useYourApp();
  useEffect(() => {
    if (props.addressWallet) {
      getAccountBalance(props.addressWallet);
    }
  }, [props.addressWallet]);
  return (
    <div>
      <p>Current account: {props.addressWallet}</p>
      <p>Current balance: {balance}</p>
    </div>
  );
}
