import React from "react";
import './st.css'

const Feed = ({ user, names, jobs }) => {
  return (
    <div className="blocks">
      <img src={user} alt="" className="c-img" />
      <div className="con">
        <p className="des">
          Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit.
          Vitae congue ultrices neque penatibus mi in quisque. Leo in cursus
          enim magnis ante. Proin iaculis platea ipsum sagittis ac eu aliquam
          quis. Ornare tincidunt tempus semper
        </p>
        <h4>{names}</h4>
        <p className="job">{jobs}</p>
      </div>
    </div>
  );
};

export default Feed;
