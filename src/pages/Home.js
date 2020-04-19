import React from 'react';
import aboutMe from '../json/about-me.json';
import { Col, Row, Container } from '../components/Grid';

const Home = () => {
  return (
      <Container>
        <Col size="12">
          {
            aboutMe.map(item =>
              <Row key={item.heading}>
                <div className="paragraph">
                  <h3>{item.heading}</h3>
                  <p>{item.paragraph}</p>
                </div>
              </Row>
            )
          }
        </Col>
      </Container>
  )
}
export default Home;