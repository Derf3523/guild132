import Web3 from "web3/dist/web3.min.js";
import { useEffect, useState } from "react";
import './App.css';

function App() {

  const [state, setState] = useState({account: ""})

  async function loadBlockCheinData() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
    const network = await web3.eth.net.getNetworkType()
    const accounts = await web3.eth.getAccounts()
    console.log(accounts);
    setState({account: accounts[0]})
  }

  useEffect(() => {
    loadBlockCheinData()
  }, [])

  return (
    <div className="container">
      <h1>Hello, World!</h1>
      <p>Your account: {state.account}</p>
    </div>
  );
}

export default App;
