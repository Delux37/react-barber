import Login from "./features/auth/Login";
import SignupClient from "./features/auth/SignupClient";
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
              <Route path="auth/login" addActiveUser={addActiveUser} element={<Login  addActiveUser={addActiveUser}/>} />
              <Route path="auth/signup" addActiveUser={addActiveUser} element={<SignupClient addActiveUser={addActiveUser}/>} />
          </Routes>
        </div>
    </BrowserRouter>
  )
}

export default App;
