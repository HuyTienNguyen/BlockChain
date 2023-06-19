import { Web3ReactProvider } from "@web3-react/core";
import { ethers } from "ethers";
import React from "react";
import "./App.css";
import YourApp from "./YourApp";
import GetTx from "./GetTx";

function getLibrary(provider) {
  const library = new ethers.providers.Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

function App() {
  return ( 
    <Web3ReactProvider getLibrary={getLibrary}>
      <YourApp />
      <GetTx />
    </Web3ReactProvider>
  );
}

export default App;
