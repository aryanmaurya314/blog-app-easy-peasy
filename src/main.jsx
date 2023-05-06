import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StoreProvider } from 'easy-peasy';
import store from './store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <Router>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </StoreProvider>
  </React.StrictMode>
);
