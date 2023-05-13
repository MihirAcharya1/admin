import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Staffs from './pages/Staffs';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

export default function IndexApp(){
  return(
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<App/>}></Route>
          <Route path='/pages/Staffs' element={<Staffs/>}></Route>
         
        </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <IndexApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

