import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ToastContainer
      position="top-center"
      toastOptions={{
        className: "",
        style: {
          border: `1px solid `,
          color: "#000000",
          fontSize: "15px",
          marginTop: "100px",
          borderRadius: "10px",
          background: "#ffc629",
        },
      }}
      autoClose={1000}
      limit={1}
    />
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
