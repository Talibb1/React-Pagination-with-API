import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Headers=()=> {
  return (
   <>
     <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">REACT WORK</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Pagination</Nav.Link>
            <Nav.Link href="#features">Infinite Scroll</Nav.Link>
            <Nav.Link href="#pricing">Image lazy Loading</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
   </>
  )
}

export default Headers