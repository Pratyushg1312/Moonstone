import Card from 'react-bootstrap/Card';
import "./Aboutus.css"
import PersonImg from './PersonImg/PersonImg';
function Aboutus() {
  return (
    <div className="aboutus-section">
      <div className="aboutus-container">
        <h1>About Us</h1>
      </div>
      <div className="aboutus-content">
        <div className="aboutus-main-img">
          <img src="https://vinhack.vinnovateit.com/vinhack.png" alt="" />
        </div>
        <div className="aboutus-side-description">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis velit labore placeat reprehenderit quidem omnis aliquam porro praesentium earum enim. Sapiente, quam. Doloribus sit est cupiditate, doloremque ut harum quisquam perferendis. Repellat, eum vero. Omnis accusamus sed odio, sequi facilis minus sint reiciendis nihil deserunt dolor exercitationem, quasi numquam et soluta modi vel impedit consectetur. Vitae at illo eveniet nihil modi consequatur laudantium? At perspiciatis unde nulla voluptate placeat corrupti non, asperiores facere ipsam distinctio error obcaecati nemo voluptates ipsum fugit omnis. Tempora recusandae repellendus veritatis corrupti iusto nihil minus, inventore minima cum necessitatibus quae enim iste consectetur nesciunt ab.</p>
        </div>
      </div>
    {/* <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/15/eb/1a/15eb1aaab07383d016ecfc5077dd5735.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> *
      </Card.Body>
    </Card> */}
    <PersonImg/>
    </div>
  );
}

export default Aboutus;
