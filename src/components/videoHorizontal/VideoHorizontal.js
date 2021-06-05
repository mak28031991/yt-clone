import React from "react";
import "./_videoHorizontal.scss";

import { AiFillEye } from "react-icons/ai";
import request from "../../api";

import moment from "moment";
import numeral from "numeral";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Col, Row } from "react-bootstrap";

const seconds = moment.duration("100").asSeconds();
const _duration = moment.utc(seconds * 1000).format("mm:ss");

const VideoHorizontal = () => {
  return (
    <Row className="videoHorizontal m-1 py-2 align-items-center">
      <Col xs={6} md={4} className="videoHorizontal_left">
        <LazyLoadImage
          src="https://www.seoclerk.com/pics/319222-1IvI0s1421931178.png"
          effect="blur"
          className="videoHorizontal_thumbnail"
          wrapperClassName="videoHorizontal_thumbnail-wrapper"
        />
        <span className="video_top_duration">{_duration}</span>
      </Col>
      <Col xs={6} md={8} className="videoHorizontal_right p-0">
        <p className="videoHorizontal_title mb-1">
          Be a full stack developer in 1 month
        </p>
        <div className="videoHorizontal_details">
          <AiFillEye /> {numeral(100000).format("0.a")}Views •
          {moment("2020-08-01").fromNow()}
        </div>
        <div className="videoHorizontal_channel d-flex align-items-center my-1">
          {/* <LazyLoadImage
            src="https://www.seoclerk.com/pics/319222-1IvI0s1421931178.png"
            effect="blur"
          /> */}
          <p>Backbench Coder</p>
        </div>
      </Col>
    </Row>
  );
};

export default VideoHorizontal;
