import { InjectedConnector } from "@web3-react/injected-connector";

export const supportedChainIdsArray = [1, 3, 4, 5, 42];

export const injectedConnector = (chainId = null) => {
  const supportedChainIds = [1, 3, 4, 5, 42];
  if (typeof chainId === 'number') {
    supportedChainIds.push(chainId);
  }

  return new InjectedConnector({
    supportedChainIds: supportedChainIds,
  });
};
