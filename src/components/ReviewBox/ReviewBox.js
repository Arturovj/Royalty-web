import React from "react";
import "./ReviewBox.scss";

export default function ReviewBox(props) {
  const { userReview } = props;

  return (
    <>
      <div className="box">
        <article className="media">
          <div className="media-left"></div>
          <div className="media-content">
            <div className="content">
              <strong style={{color: "black"}}>{userReview.name}</strong> <br />
              <div>
                <img className="userReviewImage" src={userReview.image} />
              </div>
              <div>
                <small style={{color: "black"}}>{userReview.review}</small>
              </div>
              <div>
                <small style={{color: "black"}}>{userReview.stars}</small>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
