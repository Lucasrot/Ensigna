import { useCartContext } from "../../context/CartContext";
import { Table } from "react-bootstrap";
import { useState } from "react";
import { addDoc, collection } from "@firebase/firestore";
import { db } from "../../firebase/dbConnection";
import "./Cart.css";
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';



const Cart = () => {
  const { cart, total, removeItem, clearCart } = useCartContext();
  
  const [formData, setFormData] = useState({name:"", tel:"", email:""});
  const handleRemoveItem = (id, price, qty) => {
    removeItem(id, price, qty);
  };

  const handleClearCart = () => {
    clearCart();
  };
  const handleOnChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const [show, setShow] = useState(false);

  const handleSaveCart = () => {
    console.log("Saving in database")
    console.log("formData", formData)
    console.log("cart", cart)

    const ordersCollection = collection(db, "orders")
    const newOrder = {
      buyer: formData,
      items: cart,
      date: new Date(),
      total: total
    }

    addDoc(ordersCollection, newOrder)
    .then((doc)=>{
      alert("Pedido guardado con id: " + doc.id)
      console.log("Order saved with id: " + doc.id)
      clearCart();
      setFormData({name:"", tel:"", email:""})
      setShow(true); 
    })
    .catch((error)=>{
      console.error("Error adding document: ", error)})
  }

  return (
    <div className="carrito m-2">
      <Table striped bordered hover>
        <thead>
          <tr>
          <th>id</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart?.map(({ id, name, price, qty }, index) => {
            return (
              <tr key={index}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{price}</td>
                <td>{qty}</td>
                <td>
                  <button className="bg-danger text-white rounded" onClick={() => handleRemoveItem(id, price, qty)}>
                    Eliminar Producto
                  </button>
                </td>
              </tr>
            );
          })}
          <tr>
            <td colSpan={4}>Total Precio</td>
            <td> $ {total}</td>
          </tr>
        </tbody>
      </Table>
      <div className="formulario bg-dark p-2 text-white rounded">
        <div className="inputs">
          <input 
            type="text" 
            name="name" 
            id="name" 
            placeholder="Ingrese su nombre" 
            onChange={(e)=> handleOnChange(e)}
          />
          <input 
            type="number" 
      name="tel" 
      id="tel" 
      placeholder="Ingrese su telefono" 
            onChange={(e)=> handleOnChange(e)}
          />
          <input 
            type="email" 
      name="email" 
      id="email" 
      placeholder="Ingrese su email" 
            onChange={(e)=> handleOnChange(e)}
          />
        </div>
        <div className="m-2">
    <button 
      className="bg-danger text-white rounded boton1" 
      onClick={handleClearCart}
    >
      Limpiar Carrito
    </button>
    <button 
      className="bg-success text-white rounded" 
      onClick={handleSaveCart}
    >
      Finalizar Compra
    </button>
        </div>
      </div>

      {show && (
      <Alert show={show} variant="success" className="mt-3">
        <Alert.Heading>Compra Finalizada</Alert.Heading>
        <p>
          Tu pedido ha sido guardado con éxito. ¡Gracias por tu compra!
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Cerrar
          </Button>
        </div>
      </Alert>
      )}
    </div>
  )
}


export default Cart