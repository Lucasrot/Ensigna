/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
  product.isStar = true
  return (
    <Card style={{ width: '15rem'}}>
      <Card.Header as="h2">{product.name}</Card.Header>
      <Card.Img variant="top" style={{ height: '60%' }} src={product.image} alt={product.name} />
      <Card.Body className='d-flex flex-column justify-content-end '>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>${product.price}</Card.Text>
        <Link to={`/product/${product.id}`} >
          <Button variant="primary">Detalle</Button>
        </Link>
      </Card.Body>
      <Card.Footer className="text-muted">Solo quedan {product.stock}</Card.Footer>
    </Card>
  );
};

export default Item;
