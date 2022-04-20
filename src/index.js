import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import MyProvider from './context/MyProvider';
import App from './App';

ReactDOM.render(
    <MyProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
</MyProvider> , document.querySelector('#root')
);


