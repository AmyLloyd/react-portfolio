import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import { Link } from 'react-router-dom';

import './styles.css'

function AboutContainer() {
  return (
    <Container fluid="md" className='min-vh'>
      <Row className="align-items-center">
        <Col sm={12} md={7} className="ps-3 pe-3">
            <div className='mt-2 pt-2 ps-3 pe-3'>
            <h1>Hi! I'm Amy</h1>
                <p className="mt-1">I'm a junior Full Stack Web Developer who loves getting involved in projects from start to finish.</p>
                <p className="mt-1">As a problem solver, I strive to meet clients' design needs with creativity and ingenuity.</p>
                <p className="mt-1">With a Graduate Certificate of Education in Innovation and Change from Torrens University, I'm committed to continuous learning and improvement.</p>
                <p className="mt-1">Collaboration is key to my approach—I thrive in team settings, where collective efforts lead to exceptional results. </p>
                <p>Let's turn great ideas into reality!</p>
            </div>
        </Col> 
        <Col md={3} className='mt-2 pt-2'>
            <div className='center-content'>
                    <img src='./assets/amy_github_flip.jpg' alt='a visual showing a woman with a green and blue connecting lines on a dark grey background' className="feature-photo"/>
                    <button className='feature-button sticky-button display-block'>
                        <Link to="/portfolio">
                          <span class="material-symbols-outlined">arrow_right_alt</span>
                          Portfolio!
                        </Link>
                    </button>
            </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutContainer;