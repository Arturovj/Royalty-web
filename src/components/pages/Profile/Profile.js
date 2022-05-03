import React from "react";
import "./Profile.scss";
import { useAuthContext } from "../../../contexts/AuthContext";
import { Link } from "react-router-dom";
import ModalApp from "../../Modal/ModalApp";


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
      <div>
     
      <form className="profile-form">
      <div className="profile block">
      <Link to="/editprofile">
      
                    <a className="add-button aprofile" ><span className="icon entypo-cog scnd-font-color"></span></a>
                    </Link>
                    
                    <div className="profile-picture big-profile-picture clear">
                        <img width="150px" alt="picture" src={user.avatar} />
                    </div>
                    <h1 className="user-name h1profile">{user.name}</h1>
                    <div className="profile-description">
                        <p className="scnd-font-color">{user.email}</p>
                    </div>
                    <ul className="profile-options horizontal-list">
                        <li><a className="comments aprofile" ><p><span className="icon fontawesome-comment-alt scnd-font-color"></span>Chat</p></a></li>
                        <li><a className="views aprofile" ><p><span className="icon entypo-vcard scnd-font-color"></span>Info</p></a></li>
                        <li><a className="likes aprofile" ><p><span className="icon entypo-note-beamed scnd-font-color"></span>Songs</p></a></li>
                    </ul>
                </div>
                

      </form>

      </div>
      <div style={{cursor: 'pointer'}}>
      <ModalApp ></ModalApp>
      </div>
    </>
  );
};

export default Profile;
