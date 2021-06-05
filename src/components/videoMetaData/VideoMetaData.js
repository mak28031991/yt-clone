import moment from "moment";
import numeral from "numeral";
import React from "react";
import "./_videoMetaData.scss";

import { MdThumbUp, MdThumbDown } from "react-icons/md";
import ShowMoreText from "react-show-more-text";

const VideoMetaData = () => {
  return (
    <div className="videoMetaData py-2">
      <div className="videoMetaData_top">
        <h5>Video Title</h5>
        <div className="d-flex justify-content-between align-items-center py-1">
          <span>
            {numeral(100000).format("0.a")}Views •
            {moment("2020-05-6").fromNow()}
          </span>

          <div>
            <span className="mr-3">
              <MdThumbUp size={26} /> {numeral(100000).format("0.a")}
            </span>
            <span className="mr-3">
              <MdThumbDown size={26} /> {numeral(100000).format("0.a")}
            </span>
          </div>
        </div>
      </div>

      <div className="videoMetaData_channel d-flex justify-content-between align-items-center my-2 py-3">
        <div className="d-flex">
          <img
            src="https://www.seoclerk.com/pics/319222-1IvI0s1421931178.png"
            alt=""
            className="rounded-circle mr-3"
          />
          <div className="d-flex flex-column">
            <span>Backbench Coder</span>
            <span>{numeral(100000).format("0.a")} Subscribers</span>
          </div>
        </div>
        <button className="btn border-0 p-2 m-2">Subscribe </button>
      </div>
      <div className="videoMetaData_description">
        <ShowMoreText
          lines={3}
          more="SHOW MORE"
          less="SHOW LESS"
          anchorClass="showMoreText"
          expanded={false}
        >
          quae tempora cum placeat, veniam fuga voluptatum ducimus, error quis
          tempore alias! Nostrum accusantium blanditiis eaque placeat
          reprehenderit recusandae et expedita ab amet excepturi ullam voluptas,
          quaerat ad sed, tempore labore corrupti! Quia unde aliquid reiciendis
          deleniti numquam! Placeat dolores animi totam facilis vel voluptatum,
          accusamus tempore natus exercitationem officia. Repudiandae Quia unde
          aliquid reiciendis deleniti numquam! Placeat dolores animi totam
          facilis vel voluptatum, accusamus tempore natus exercitationem
          officia. Repudiandae .
        </ShowMoreText>
      </div>
    </div>
  );
};

export default VideoMetaData;
