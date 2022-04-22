import "./AddFriends.css";
// import { Users } from "../../dummyData";
// import Online from "../online/Online";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuthContext } from "../../../contexts/AuthContext";
import { Add, Remove } from "@material-ui/icons";

export default function Rightbar({ user }) {

  const [friends, setFriends] = useState([]);
  const { user: currentUser, dispatch } = useAuthContext(user);
  const [followed, setFollowed] = useState(
    currentUser.followings.includes(user?.id)
  );

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get("http://localhost:3001/api/users/friends/" + user._id);
        setFriends(friendList.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [user]);

  const handleClick = async () => {
    try {
      if (followed) {
        await axios.put(`http://localhost:3001/api/users/${user._id}/unfollow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "UNFOLLOW", payload: user._id });
      } else {
        await axios.put(`/users/${user._id}/follow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "FOLLOW", payload: user._id });
      }
      setFollowed(!followed);
    } catch (err) {
    }
  };

  console.log(user)

  const ProfileRightbar = () => {
    return (
      <>
      <p>HOLA</p>
        {/* {user._id !== currentUser._id && ( */}
          <button className="rightbarFollowButton" onClick={handleClick}>
            {followed ? "Unfollow" : "Follow"}
            {followed ? <Remove /> : <Add />}
          </button>
        {/* )} */}
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar /> : ""}
      </div>
    </div>
  );
}
