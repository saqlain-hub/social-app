import React from "react";
import "./Home.css";
import ProfileSide from "../../components/profileSide/ProfileSide";
import PostSide from "../../components/PostSide/PostSide";

const home = () => {
  return (
    <div className="home">
      <ProfileSide />
      <PostSide />
      <div className="rightSide">RightSide</div>
    </div>
  );
};

export default home;
