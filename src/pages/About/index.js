import React from 'react';
import { ConstructionNotice } from '../../components';
import { Row, Col, Card } from 'react-bootstrap';
import pythonIcon from '../../images/python.png';
import htmlIcon from '../../images/html.png';
import cssIcon from '../../images/css3-logo.png';
import jsIcon from '../../images/JavaScript.png';
import jestIcon from '../../images/jest.png';
import reactIcon from '../../images/react.png';
import reduxIcon from '../../images/redux-logo.png';
import mySQLIcon from '../../images/MySQL.jpeg';
import postgresIcon from '../../images/postgres.png';
import mongoIcon from '../../images/mongodb-logo.png';
import djangoIcon from '../../images/django-logo.png';
import dockerIcon from '../../images/docker-logo.png';
import flaskIcon from '../../images/flask.png';
import gitIcon from '../../images/git.png';
import nodeIcon from '../../images/node-logo.png';
import stataIcon from '../../images/stata.jpeg';

// import mongoIcon from '../../images/mongodb-logo.png';

import './style.css';

const About = () => {
  return (
    <div>
      <h1 className="centred-headings">About</h1>
      <section id="about-page">
        <div className="box" id="box-1">
          <h4 className="box-headers" id="header1">
            Fascinated.
          </h4>
        </div>
        <div className="appearing-box-1">This will be the box that shows up</div>
        <div className="box" id="box-2">
          <h4 className="box-headers" id="header2">
            Learner.
          </h4>
        </div>
        <div className="appearing-box-2">This will be the box that shows up</div>
        <div className="box" id="box-3">
          <h4 className="box-headers" id="header3">
            Improver.
          </h4>
        </div>
        <div className="appearing-box-3">This will be the box that shows up</div>
        <div className="box" id="box-4">
          <h4 className="box-headers" id="header4">
            Human.
          </h4>
        </div>
        <div className="appearing-box-4">This will be the box that shows up</div>
      </section>
      <section className="cardContainer">
        <h2 className="centred-headings">My Tech Stack</h2>
        <Row xs={1} md={4} className="g-4">
          <Col>
            <Card className="tech-stack-icons">
              <Card.Img variant="top" src={htmlIcon} className="icon" />
              <Card.Body>
                <Card.Title>HTML</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="tech-stack-icons">
              <Card.Img variant="top" src={cssIcon} className="icon" />
              <Card.Body>
                <Card.Title>CSS3</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="tech-stack-icons">
              <Card.Img variant="top" src={jsIcon} className="icon" />
              <Card.Body>
                <Card.Title>JavaScript</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="tech-stack-icons">
              <Card.Img variant="top" src={jestIcon} className="icon" />
              <Card.Body>
                <Card.Title>Jest</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row xs={1} md={4} className="g-4">
          <Col>
            <Card className="tech-stack-icons">
              <Card.Img variant="top" src={reactIcon} className="icon" />
              <Card.Body>
                <Card.Title>React</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="tech-stack-icons">
              <Card.Img variant="top" src={reduxIcon} className="icon" />
              <Card.Body>
                <Card.Title>Redux</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="tech-stack-icons">
              <Card.Img variant="top" src={nodeIcon} className="icon" />
              <Card.Body>
                <Card.Title>NodeJS</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="tech-stack-icons">
              <Card.Img variant="top" src={gitIcon} className="icon" />
              <Card.Body>
                <Card.Title>Git</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row xs={1} md={4} className="g-4">
          <Col>
            <Card className="tech-stack-icons">
              <Card.Img variant="top" src={dockerIcon} className="icon" />
              <Card.Body>
                <Card.Title>Docker</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="tech-stack-icons">
              <Card.Img variant="top" src={mySQLIcon} className="icon" />
              <Card.Body>
                <Card.Title>MySQL</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="tech-stack-icons">
              <Card.Img variant="top" src={postgresIcon} className="icon" />
              <Card.Body>
                <Card.Title>Postgres</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="tech-stack-icons">
              <Card.Img variant="top" src={mongoIcon} className="icon" />
              <Card.Body>
                <Card.Title>Mongo DB</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row xs={1} md={4} className="g-4">
          <Col>
            <Card className="tech-stack-icons">
              <Card.Img variant="top" src={pythonIcon} className="icon" />
              <Card.Body>
                <Card.Title>Python</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="tech-stack-icons">
              <Card.Img variant="top" src={flaskIcon} className="icon" />
              <Card.Body>
                <Card.Title>Flask</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="tech-stack-icons">
              <Card.Img variant="top" src={djangoIcon} className="icon" />
              <Card.Body>
                <Card.Title>Django</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="tech-stack-icons">
              <Card.Img variant="top" src={stataIcon} className="icon" />
              <Card.Body>
                <Card.Title>Stata</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
    </div>
  );
};

{
  /* { */
}
/* <h1>About Me</h1>
      <ConstructionNotice />
      <br />
      <p>
        Please return to this page after <span>23/08/2021</span>.
      </p> */
{
  /* } */
}

export default About;
