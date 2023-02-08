import Card from 'react-bootstrap/Card';

function Aboutus() {
  return (
    <div className="aboutus-section">

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/15/eb/1a/15eb1aaab07383d016ecfc5077dd5735.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
      </Card.Body>
    </Card>
    </div>
  );
}

export default Aboutus;
