/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';
import { useCartContext } from '../../context/CartContext';

const ItemDetail = ({id, name, description, price, image, stock}) => {   
  const { addToCart } = useCartContext();

    const handleOnBuy = (qty) => {
        console.log(`Se agregaron ${qty} productos al carrito`);
        const item = {id, name, description, price};
        addToCart(item, qty);
    }

  return (
      <main className='d-flex justify-content-center align-items-center m-2'>
          <Card style={{ width: '16rem'}}>
            <Card.Header as="h1">{name}</Card.Header>
            <Card.Img variant="top" src={image} />
              <Card.Body>
                <Card.Text>{description}</Card.Text>
                <Card.Text>${price}</Card.Text>
                <ItemCount stock={stock} initial={1} handleOnBuy={handleOnBuy}/>
                </Card.Body>
            <Card.Footer className="text-muted">Solo quedan {stock}</Card.Footer>
          </Card>
      </main>
  );
};

export default ItemDetail

