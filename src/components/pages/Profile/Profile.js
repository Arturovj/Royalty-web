import React from "react";
import "./Profile.scss";
import { useAuthContext } from "../../../contexts/AuthContext";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user } = useAuthContext();

  console.log(user);

  return (
    <>
      <div className="background-profile">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      {/* <div className="profile"><p>{JSON.stringify(user)}</p></div> */}

      <form className="register-form">
        <div className="input-container">
          <div className="menu-box block">
            <h2 className="titular">MENU BOX</h2>
            <ul className="menu-box-menu ul-profile">
              <li>
                <a className="menu-box-tab a-profile" href="#6">
                  <span class="icon fontawesome-envelope scnd-font-color"></span>
                  Messages<div class="menu-box-number">24</div>
                </a>
              </li>
              <li>
                <a className="menu-box-tab a-profile" href="#8">
                  <span class="icon entypo-paper-plane scnd-font-color"></span>
                  Songs<div class="menu-box-number">3</div>
                </a>
              </li>
              <li>
              <Link to="/accountSettings">
                <a className="menu-box-tab a-profile" href="#12">
                  <span class="icon entypo-cog scnd-font-color"></span>
                   Account Settings
                </a></Link>
              </li>
              <li>
                <a className="menu-box-tab a-profile" href="#13">
                  <span class="icon entypo-chart-line scnd-font-color"></span>
                  Statistics
                </a>
              </li>
            </ul>
          </div>
          <div className="middle-container container">
            <div className="profile block">
              <a className="add-button a-profile" href="#28">
                <span class="icon entypo-plus scnd-font-color"></span>
              </a>
              <div className="profile-picture big-profile-picture clear">
                <img
                  width="150px"
                  alt="Daft Punk"
                  src="https://dice-i-scdn-co.imgix.net/image/ab6761610000e5ebca77d763703a93930c363a39"
                />
              </div>
              <h1 className="user-name h1-profile">
                <p>{user.name}</p>
              </h1>
              <div className="profile-description">
                <p className="scnd-font-color">
                  <p>{user.email}</p>
                </p>
              </div>
            </div>
          </div>
          <div className="calendar-day block">
            <div className="arrow-btn-container">
              <a className="arrow-btn left a-profile" href="#200">
                <span class="icon fontawesome-angle-left"></span>
              </a>
              <h2 className="titular h2-profile">WEDNESDAY</h2>
              <a className="arrow-btn right a-profile" href="#201">
                <span class="icon fontawesome-angle-right"></span>
              </a>
            </div>
            <p className="the-day">26</p>
            <a className="add-event button a-profile" href="#27">
              ADD EVENT
            </a>
          </div>
        </div>
      </form>
    </>
  );
};

export default Profile;
