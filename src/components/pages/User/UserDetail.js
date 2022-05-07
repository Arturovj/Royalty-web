import React from "react";
import "./UserDetail.scss";
import { useState } from "react";
import { useEffect } from "react";
import { getUserDetail } from "../../../services/UsersService";
import { Link, useParams } from "react-router-dom";
import Rightbar from "../AddFriends/AddFriends";
import { useAuthContext } from "../../../contexts/AuthContext";
import ClipLoader from "react-spinners/ClipLoader";

const UserDetail = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [loading, setLoading] = useState(true);
  const { user } = useAuthContext();
  const { id } = useParams();

  useEffect(() => {
    getUserDetail(id)
      .then((user) => {
        setCurrentUser(user);
      })
      .finally(() => {
        setLoading(false)
      })
  }, []);

  return (
    <div className="Profile">
      <div className="background-profile">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      { loading ? (
      <div className="cliploader" >
    <ClipLoader  size={200} color={"#fff"}/>
    </div>) : (
      <form className="profile-form">
      <Rightbar
        style={{
          background: "red",
        }}
        user={user}
      />
        <div className="profile block">
          <Link to="/editprofile">
            <a className="add-button aprofile">
              <span className="icon entypo-cog scnd-font-color"></span>
            </a>
          </Link>
          <div className="profile-picture big-profile-picture clear">
            <img width="150px" alt="picture" src={currentUser.avatar} />
          </div>
          <h1 className="user-name h1profile">{currentUser.name}</h1>
          <div className="profile-description">
            <p className="scnd-font-color">{currentUser.email}</p>
          </div>
          <ul className="profile-options horizontal-list">
            <li>
              <Link to="/messenger" style={{ textDecoration: "none" }}>
                <a className="comments aprofile">
                  <p>
                    <span className="icon fontawesome-comment-alt scnd-font-color"></span>
                    Chat
                  </p>
                </a>
              </Link>
            </li>
            <li>
              <a className="views aprofile">
                <p>
                  <span className="icon entypo-vcard scnd-font-color"></span>
                  Info
                </p>
              </a>
            </li>
            <li>
              <a className="likes aprofile">
                <p>
                  <span className="icon entypo-note-beamed scnd-font-color"></span>
                  Songs
                </p>
              </a>
            </li>
          </ul>
        </div>
      </form>


    )}

      <h3 className="posts-container">Posts</h3>
      <div>
        <hr />
        <div className="post-song">
          <ul className="list-group">
            {currentUser.posts?.map((post, i) => {
              return (
                <li
                  key={post.id}
                  className="li-content"
                >
                  <Link
                    className=""
                    to={`/post/${post.id}`}
                  >
                    <div className="">
                      {i + 1}. {post.title}
                    </div>
                    <img src={post.image} alt=""></img>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;

<>
  {/* <div className="background-profile">
        <div className="shape"></div>
        <div className="shape"></div>
      </div> */}
  {/* <div className="profile"><p>{JSON.stringify(user)}</p></div> */}

  {/* <form className="profile-form">
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
        
      </form> */}
</>;
