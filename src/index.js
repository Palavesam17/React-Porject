import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ShopContextProvide from './contexts/Shopcontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ShopContextProvide>
    <App />
  </ShopContextProvide>
);


