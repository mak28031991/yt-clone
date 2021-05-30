import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Video from "../../components/video/Video";
import CategoriesBar from "../../components/catergoriesBar/CategoriesBar";

const HomeScreen = () => {
  return (
    <div>
      <Container>
        <CategoriesBar />
        <Row>
          {[...new Array(20)].map(() => (
              <Col lg={3} md={4}>
                <Video />
              </Col>
            )
          )}
        </Row>
      </Container>
    </div>
  );
};

export default HomeScreen;
