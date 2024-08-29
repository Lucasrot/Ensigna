import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import Logo from '../../assets/img/Logo.png';
  const Footer = () => {

    return (
      <footer className="bg-dark text-white pb-2 mt-2">
        <Container>
          <Row>
            <Col className='d-flex flex-row pr-2 align-items-center'>
              <Link to="/">
                <img src={Logo} alt="Logo" />
              </Link>
              <h3 className="p-2">Ensigna</h3>
            </Col>
            <Col className="mt-3">
              <Link to="/about" className='text-white'>About Us</Link>
              <span className="mx-2">|</span>
              <Link to="/contact" className='text-white'>Contacto</Link>
            </Col>
          </Row>
        </Container>
        <p className="p-2">© Lucas Roteño</p>
      </footer>
    )
  }

  export default Footer