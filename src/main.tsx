import React from 'react';
import ReactModal from "react-modal";
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './routes/routesConfig';
import './styles/global.css';

ReactModal.setAppElement("#root");

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
