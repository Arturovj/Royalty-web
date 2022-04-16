import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp/SignUp";
import Login from "./components/pages/Login/Login";
import Profile from "./components/pages/Profile/Profile";
import Songs from "./components/pages/Songs/Songs";
import { useAuthContext } from "./contexts/AuthContext";
import ProtectedRoute from "./guards/ProtectedRoute";

function App() {
  const { isAuthenticationFetched } = useAuthContext()

  return (
    <div className="App">
      <Navbar />

      {/* {!isAuthenticationFetched ? (
        <p>Loading...</p>
      ) : ( */}

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
         <Route path="/" element={<ProtectedRoute/>}>
          <Route path="/profile" element={<Profile />} />
          <Route patch="/songs" element={<Songs />} />
           </Route> 
        </Routes>
    {/* //  )}  */}
    </div>
  );
}

export default App;
