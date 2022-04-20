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
import Contenido from "./components/Contenido/Contenido";
import UnProtectedRoute from "./guards/UnProtectedRoute";
import NewPost from "./components/pages/NewPost/NewPost";
import Messenger from "./components/pages/messenger/messenger";

function App() {
  const { isAuthenticationFetched } = useAuthContext();

  return (
    <div className="App">
      <Navbar />
      <Contenido/>

      {!isAuthenticationFetched ? (
        <p>Loading...</p>
      ) : (
        <Routes>
              <Route element={<UnProtectedRoute/>}>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
             </Route>

          <Route path="/" element={<Home />}></Route>
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/" element={<ProtectedRoute />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/songs" element={<Songs />} />
            <Route path="/messenger" element={<Messenger />}></Route>
            <Route path="/addMusic" element={<NewPost/>}></Route>
          </Route>
        </Routes>
      )}

      
    </div>
  );
}

export default App;
