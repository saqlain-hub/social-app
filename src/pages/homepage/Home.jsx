import React from "react";
import "./Home.css";
import ProfileSide from "../../components/profileSide/ProfileSide";

const home = () => {
  return (
    <div className="home">
      <ProfileSide />
      <div className="postSide">Posts</div>
      <div className="rightSide">RightSide</div>
    </div>
  );
};

export default home;
