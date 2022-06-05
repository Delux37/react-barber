import Login from "./features/auth/Login";
import SignupClient from "./features/auth/SignupClient";
import SignupBarber from "./features/auth/SignupBarber";
import { AuthorizedRoutes, UnauthorizedRoutes } from './features/auth/Guards';
import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  // useNavigate
} from "react-router-dom";
import './App.css';
import Dashboard from "./features/Dashboard";
import BarberDetail from "./features/catalog/BarberDetail";

function App() {
  // const navigate = useNavigate();
  const [activeUser, setActiveUser] = useState(    {
    email: 'john.doe@test.com',
    password: '12345678'
});

  const addActiveUser = (user) => {
    setActiveUser(user);
  }

  const handleSignout = () => {
    setActiveUser(null);
    // navigate("/auth/login");
  }

  return (
    <BrowserRouter>
          <Routes>
              <Route path='*' element={<Navigate to="/auth/login"/>} />
              <Route path="dashboard" element={
                <AuthorizedRoutes user={activeUser}>
                  <Dashboard email={activeUser?.email} signOut={handleSignout}/>
                </AuthorizedRoutes>
              }></Route>
              <Route path="dashboard/:id" element={
                <AuthorizedRoutes user={activeUser}>
                  <BarberDetail email={activeUser?.email} signOut={handleSignout}/>
                </AuthorizedRoutes>
              }></Route>
              <Route path="auth/login" element={
                  <UnauthorizedRoutes user={activeUser}>
                    <div className="containerCustom">
                      <Login  addActiveUser={addActiveUser}/>
                    </div>
                  </UnauthorizedRoutes> }
               />
              <Route path="auth/signup" element={
                <UnauthorizedRoutes user={activeUser}>
                  <div className="containerCustom">
                    <SignupClient addActiveUser={addActiveUser}/>
                  </div>
                </UnauthorizedRoutes>
              } />
              <Route path="auth/signup-barber" element={
                <UnauthorizedRoutes user={activeUser}>
                  <div className="containerCustom">
                    <SignupBarber />
                  </div>
                </UnauthorizedRoutes>
              } />
          </Routes>
    </BrowserRouter>
  )
}

export default App;
