import React from "react";
import reviewsData from "./data/reviewsData.json";
import ReviewBox from "./ReviewBox/ReviewBox";
import './ReviewsSection.scss'

export default function ReviewsSection() {
  return (
    <>
      <div className="review-container">
        <h1 style={{color: "black"}}> Reviews </h1>
        <div className="review-list">
          {reviewsData.map((userReview, index) => (
              <div className="review-list2">
            <ReviewBox userReview={userReview} key={index} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
