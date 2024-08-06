/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import './item.css'
import { Link } from 'react-router-dom';

const Item = ({ product }) => {

    const stock = 10;
    const unidad = 1;

    const [cantidad, setCantidad] = useState(unidad);

    const handleClick = (operacion) => {
        operacion === "-" ? clipRestar() : clipSumar();
    };

    const clipRestar = () => {
        if (cantidad === 1) {
            alert("No se puede restar");
            return;
        }
        setCantidad(cantidad - 1);
    };

    const clipSumar = () => {
        if (cantidad === stock) {
            alert("No hay stock");
            return;
        }
        setCantidad(cantidad + 1);
    };

    return (
        <section className="item">
            <Card style={{ width: '14rem' }}>
                <Card.Header as="h5">{product.category}</Card.Header>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                    <Card.Title as="h2">{product.name}</Card.Title>
                    <Card.Text>
                        {product.description}
                    </Card.Text>
                    <Card.Text>
                        ${product.price}
                    </Card.Text>
                    <div className='p-1'>
                        <button onClick={() => handleClick("-")}>-</button>
                        <span>{cantidad}</span>
                        <button onClick={() => handleClick("+")}>+</button>
                    </div>
                    <Link to={`/producto/${product.id}`}>
                        <Button variant="primary">Detalle</Button>
                    </Link>
                </Card.Body>
            </Card>
        </section>
    );
}

export default Item