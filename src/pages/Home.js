import React from 'react';
import aboutMe from '../json/about-me.json';
import { Col, Row, Container } from '../components/Grid';
import './Home.css';

const Home = () => {
  return (
    <div className="background">
      <Container>
        <Col size="12">
          {
            aboutMe.map(item =>
              <Row>
                <div className="paragraph">
                  <h3>{item.heading}</h3>
                  <p>{item.paragraph}</p>
                </div>
              </Row>
            )
          }
        </Col>
      </Container>
    </div>
  )
}
export default Home;