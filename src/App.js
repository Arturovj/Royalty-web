import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Nft from "./components/pages/Nft";
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
import UserDetail from "./components/pages/User/UserDetail";
import PostDetail from "./components/pages/Artists/PostDetail";
import { Toaster } from "react-hot-toast";
import Accordion from "./components/Faq/Faq";
import SliderComponent from "./components/Slider/SliderComponent";
import CookieConsent, { Cookies } from "react-cookie-consent";

function App() {
  const { isAuthenticationFetched } = useAuthContext();

  return (
    <div className="App">
      <Navbar />
      <Contenido />
      <Toaster />

      {!isAuthenticationFetched ? (
        <p>Loading...</p>
      ) : (
        <Routes>
          <Route element={<UnProtectedRoute />}>
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Route>

          <Route path="/" element={<Home />}></Route>
          <Route path="/faq" element={<Accordion />}></Route>
          <Route path="/sponsorships" element={<SliderComponent />}></Route>

          <Route path="/products" element={<Products />} />
          <Route path="/" element={<ProtectedRoute />}>
            <Route path="/nft" element={<Nft />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/users/:id" element={<UserDetail />} />
            <Route path="/songs" element={<Songs />} />
            <Route path="/messenger" element={<Messenger />}></Route>
            <Route path="/post/:id" element={<PostDetail />}></Route>
            <Route path="/addMusic" element={<NewPost />}></Route>
          </Route>
        </Routes>
      )}

      <CookieConsent
        location="bottom"
        buttonText="Sure man!!"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        This website uses cookies to enhance the user experience.{" "}
        <span style={{ fontSize: "10px" }}></span>
      </CookieConsent>
    </div>
  );
}

export default App;
