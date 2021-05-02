import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Sidebar from './components/sidebar/Sidebar';

import { walletFinder } from './web3/walletFinder';

ReactDOM.render(
  <React.StrictMode>
    <Sidebar />
  </React.StrictMode>,
  document.getElementById('root')
);

window.ethereum.on('accountsChanged', function (accounts) {
  walletFinder();
})

walletFinder();


