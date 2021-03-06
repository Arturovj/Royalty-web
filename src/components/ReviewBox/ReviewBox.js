import React from "react";
import "./ReviewBox.scss";
import Rating from '@mui/material/Rating';


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
                <small style={{color: "black"}}><i style={{color: "black"}} class="fa fa-quote-left" aria-hidden="true"></i>{userReview.review}<i style={{color: "black"}} class="fa fa-quote-right" aria-hidden="true"></i></small>
              </div>
              <div>
              <Rating name="read-only" value={userReview.stars} readOnly />
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
