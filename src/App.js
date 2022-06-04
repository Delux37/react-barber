import Login from "./features/auth/Login";
import SignupClient from "./features/auth/SignupClient";
import SignupBarber from "./features/auth/SignupBarber";

import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';

function App() {
  const [activeUser, setActiveUser] = useState(null);

  const addActiveUser = (user) => {
    console.log(user);
    setActiveUser(user);
  }



  return (
    <BrowserRouter>
        <div className="containerCustom">
          <Routes>
              <Route path="auth/login" element={<Login  addActiveUser={addActiveUser}/>} />
              <Route path="auth/signup" element={<SignupClient addActiveUser={addActiveUser}/>} />
              <Route path="auth/signup-barber" element={<SignupBarber />} />
          </Routes>
        </div>
    </BrowserRouter>
  )
}

export default App;
