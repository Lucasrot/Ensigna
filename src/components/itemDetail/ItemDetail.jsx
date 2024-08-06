/* eslint-disable no-unused-vars */
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';

const ItemDetail = (id, category, name, description, price, image) => {

    const stock = 20;
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
        <section>
            <Card style={{ width: '14rem' }}>
                <Card.Header as="h5">{category}</Card.Header>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title as="h2">{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text>
                        ${price}
                    </Card.Text>
                    <div className='p-1'>
                        <button onClick={() => handleClick("-")}>-</button>
                        <span>{cantidad}</span>
                        <button onClick={() => handleClick("+")}>+</button>
                    </div>
                    <Button variant="primary">comprar</Button>
                </Card.Body>
                <Card.Footer className="text-muted">Solo quedan {stock} disponibles</Card.Footer>
            </Card>
        </section>
    )
}

export default ItemDetail