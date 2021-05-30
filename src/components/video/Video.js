import React from "react";
import "./_video.scss";

import { AiFillEye } from "react-icons/ai";

const Video = () => {
  return (
    <div className="video">
      <div className="video_top ">
        <img
          src="https://i.ytimg.com/vi/XtMThy8QKqU/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB_UDsM4HAvzJKd1WtZgwqpu29utw"
          alt=""
        />
        <span>05:43</span>
      </div>
      <div className="video_title">Create App in 5 minutes #made by Chintu</div>
      <div className="video_details">
        <span>
          <AiFillEye /> 5m Views •
        </span>
        <span>5 days ago</span>
      </div>
      <div className="video_channel">
        <img
          src="//yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s48-c-k-c0x00ffffff-no-rj-mo"
          alt=""
        />
        <p>Rainbow Hat Jr</p>
      </div>
    </div>
  );
};

export default Video;
