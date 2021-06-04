import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Video from "../../components/video/Video";
import CategoriesBar from "../../components/catergoriesBar/CategoriesBar";
import {
  getPopularVideos,
  getVideosByCategory,
} from "../../redux/actions/videos.action";
import { useDispatch, useSelector } from "react-redux";

import InfiniteScroll from "react-infinite-scroll-component";

const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  const { videos, activeCategory } = useSelector((state) => state.homeVideos);
  const fetchData = () => {
    if (activeCategory === "All") dispatch(getPopularVideos());
    else {
      dispatch(getVideosByCategory(activeCategory));
    }
  };

  return (
    <div>
      <Container>
        <CategoriesBar />
        <InfiniteScroll
          dataLength={videos.length}
          next={fetchData}
          hasMore={true}
          Loader={
            <div className="spinner-border text-danger d-block mx-auto"></div>
          }
          className="row"
        >
          {videos.map((video) => (
            <Col lg={3} md={4}>
              <Video video={video} key={video.id} />
            </Col>
          ))}
        </InfiniteScroll>
      </Container>
    </div>
  );
};

export default HomeScreen;
