import { useCartContext } from "../../context/CartContext";

const Contact = () => {
    const { titulo } = useCartContext();
    return <h1>contacto de {titulo}</h1>;
};

export default Contact;
