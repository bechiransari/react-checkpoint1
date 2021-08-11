import './App.css';
import {Navbar, Nav,Container} from "react-bootstrap";
import {Carousel } from 'react-bootstrap';
function App() {
  return (
    <div >
      <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
   <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/347141/pexels-photo-347141.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      alt="First slide"
      
    />
    <Carousel.Caption>
      <h3>Sidi Bou Saiid</h3>
      <p>A tourist attraction known for its extensive use of blue and white</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/4275885/pexels-photo-4275885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Bargou Mountain</h3>
      <p>Lying between the mountains of northwest Tunisia and the Algerian border, the Bargou valley and the village named after it lie isolated, away from the world</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Ain Draham</h3>
      <p>Often snow-covered in December and January, Ain Draham is Tunisia’s hill station. Its steep-roofed houses spill down the western flank of Jebel Biri (1014m), the highest peak of the Kroumirie Mountains, while all around are rounded hills covered in cork forest</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  );
}

export default App;
