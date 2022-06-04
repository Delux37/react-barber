import Login from "./features/auth/Login";
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
    setActiveUser(user);
  }



  return (
    <BrowserRouter>
        <div className="containerCustom">
          <Routes>
              <Route path="auth/login" element={<Login />} />
          </Routes>
        </div>
    </BrowserRouter>
  )
}

export default App;
