import { InjectedConnector } from "@web3-react/injected-connector";
import { BscConnector } from "@binance-chain/bsc-connector";
import { BINANCE_WALLET, METAMASK_WALLET } from "./constants/wallet";

export const supportedChainIdsArray = [1, 3, 4, 5, 42];

export const injectedConnector = (typeWallet = 1, chainId = null) => {
  const supportedChainIds = [1, 3, 4, 5, 42];
  if (typeof chainId === "number") {
    supportedChainIds.push(chainId);
  }

  switch (typeWallet) {
    case METAMASK_WALLET:
      return new InjectedConnector({
        supportedChainIds: supportedChainIds,
      });
    case BINANCE_WALLET:
      return new BscConnector({ supportedChainIds: supportedChainIds });
    default:
      alert("error!");
  }
};
