import { Fragment, useState, useEffect } from "react";

import web3 from './connection/web3';
import Token from './abis/Token.json';
import Dao from './abis/DAO.json';
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";

function App() {
  const [account, setAccount] = useState(null);
  const [dao, setDao] = useState(null);
  const [token, setToken] = useState(null);
  
  useEffect(() => {
    // Check if the user has Metamask active
    if(!web3) {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!');
      return;
    }
    
    // Function to fetch all the blockchain data
    const loadBlockchainData = async() => {
      // Request accounts acccess if needed
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });  
      } catch(error) {
        console.error(error);
      }
      
      // Load Account
      const accounts = await web3.eth.getAccounts();      
      setAccount(accounts[0]);
      
      // Load Contracts
      const token = new web3.eth.Contract(Token.abi, "0x960165d823442df5915f606f14ee62a641d230D8");
      const dao = new web3.eth.Contract(Dao.abi, "0x5d2ae5458137578a83e33723e2B1ae0A223B1e15");
      setToken(token);
      setDao(dao);
      
    };
    
    loadBlockchainData();   

  }, []);
  
  return (
    <Fragment>
      <Header />

      <Main account={account} dao={dao} token={token} />
    </Fragment>
  );
}

export default App;
