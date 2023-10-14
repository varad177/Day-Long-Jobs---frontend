
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from "react-router-dom";
import Login from './components/login/Login';
import Home from './components/home/Home';
import DataProvider from './context/DataProvider';
import Header from './components/header/Header';
import { useState } from 'react';
import GetProfile from './components/profile/GetProfile';
import Resetpassword from './resetpassword/Resetpassword';
import Setresetpassword from './resetpassword/Setresetpassword';
import DetailsView from './components/workView/DetailsView';
import { Toaster } from 'react-hot-toast';

const PrivateRoute = ({ isAuthenticated, ...props }) => {
  return isAuthenticated ?
    <>
      <Header />
      <Outlet />
      <Toaster/>
    </>
    : <Navigate replace to='/login' />
}


function App() {
  const [isAuthenticated, isUserAuthenticated] = useState(false)


  return (
    <DataProvider>
      <Router>
        <Routes>
          <Route path='/login' element={<Login isUserAuthenticated={isUserAuthenticated} />} />
          <Route path='/' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path='/getprofile' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
            <Route path="/getprofile" element={<GetProfile />} />
          </Route>
          <Route path='/details/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
            <Route path="/details/:id" element={<DetailsView />} />
          </Route>
          <Route path='/reset' element={<Resetpassword />} />
          <Route path='setpassword/:token' element={<Setresetpassword />} />

        </Routes>
      </Router>

    </DataProvider>
  );
}

export default App;
