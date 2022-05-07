import "./AddFriends.css";
// import { Users } from "../../dummyData";
// import Online from "../online/Online";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuthContext } from "../../../contexts/AuthContext";
import { Add, Remove } from "@material-ui/icons";
import { getAccessToken } from "../../../store/AccesTokenStore";
import { useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

export default function Rightbar({ user }) {
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [friends, setFriends] = useState([]);
  const { user: currentUser, dispatch } = useAuthContext();
  const [followed, setFollowed] = useState(
    currentUser.followings.includes(id)
  );

  console.log(user)

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get("https://royalty-api.onrender.com/api/users/friends/" + user._id);
        setFriends(friendList.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [user]);

  const handleClick = async () => {
    setLoading(true)
    try {
      if (followed) {
        await axios.put(`https://royalty-api.onrender.com/api/users/me/unfollow`, {
          userId: id,
        },{headers:{"Authorization" : `Bearer ${getAccessToken()}`}});
        dispatch({ type: "UNFOLLOW", payload: id });
      } else {
        await axios.put(`https://royalty-api.onrender.com/api/users/me/follow`, {
          userId: id,
        },{headers:{"Authorization" : `Bearer ${getAccessToken()}`}});
        dispatch({ type: "FOLLOW", payload: id });
      }
      setFollowed(!followed);
    } catch (err) {
    }
    setLoading(false)
  };

  console.log(user)

  const ProfileRightbar = () => {
    return (
      <>
      <p></p>
        {user._id !== id && (
          <button className="rightbarFollowButton" type="button" onClick={handleClick}>
            { loading ? (
                <ClipLoader className="" size={20}/>
              ) : (
                followed ? (
                  <>
                  Unfollow
                  <Remove />
                  </>
                  ) : (<>Follow<Add /></>)
              )
            }
          </button>
         )} 
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <ProfileRightbar /> 
      </div>
    </div>
  );
}
