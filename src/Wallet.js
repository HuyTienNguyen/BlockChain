// import { useWeb3React } from "@web3-react/core";
// import { useState } from "react";
// import { ConnectWalletButton } from "@web3-react/components";

export default function Wallet() {
//   const { connector, activate, active } = useWeb3React();
//   const [activatingConnector, setActivatingConnector] = useState();

//   const onClick = (connector) => {
//     setActivatingConnector(connector);
//     activate(connector);
//   };

//   return (
//     <div>
//       {options.map((option, index) => {
//         const currentConnector = option.connector;
//         const activating = currentConnector === activatingConnector;
//         const connected = currentConnector === connector;
//         const disabled = !!(activatingConnector || connected || !!connector);

//         return (
//           <button
//             key={index}
//             onClick={() => onClick(currentConnector)}
//             disabled={disabled}
//           >
//             {option.name}
//             {activating && <span>...</span>}
//             {connected && <span>✓</span>}
//           </button>
//         );
//       })}
//       {!active && (
//         <div>
//           <p>Connect your wallet to continue</p>
//           <ConnectWalletButton />
//         </div>
//       )}
//       {active && (
//         <p>
//           Connected with {connector === connectors.injected ? "Metamask" : "Binance Smart Chain Wallet"}
//         </p>
//       )}
//     </div>
//   );
}
