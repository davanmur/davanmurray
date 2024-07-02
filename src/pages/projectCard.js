import React from 'react';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProjectCard = () => {
  return (
    <Card id="card" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/images/logo-color.png" style={{ height: '14rem' }} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
