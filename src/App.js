import Login from "./features/auth/Login";
import SignupClient from "./features/auth/SignupClient";
import SignupBarber from "./features/auth/SignupBarber";
import { AuthorizedRoutes, UnauthorizedRoutes } from './features/auth/Guards';
import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import './App.css';
import Dashboard from "./features/Dashboard";

function App() {
  const [activeUser, setActiveUser] = useState(null);

  const addActiveUser = (user) => {
    setActiveUser(user);
  }

  return (
    <BrowserRouter>
        <div className="containerCustom">
          <Routes>
              <Route path='*' element={<Navigate to="/auth/login"/>} />
              <Route path="dashboard" element={
                <AuthorizedRoutes user={activeUser}>
                  <Dashboard/>
                </AuthorizedRoutes>
              }></Route>
              <Route path="auth/login" element={
                  <UnauthorizedRoutes user={activeUser}>
                    <Login  addActiveUser={addActiveUser}/>
                  </UnauthorizedRoutes> }
               />
              <Route path="auth/signup" element={
                <UnauthorizedRoutes user={activeUser}>
                  <SignupClient addActiveUser={addActiveUser}/>
                </UnauthorizedRoutes>
              } />
              <Route path="auth/signup-barber" element={
                <UnauthorizedRoutes user={activeUser}>
                  <SignupBarber />
                </UnauthorizedRoutes>
              } />
          </Routes>
        </div>
    </BrowserRouter>
  )
}

export default App;
