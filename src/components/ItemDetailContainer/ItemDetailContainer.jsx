import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import {db} from '../../firebase/dbConnection';
import { collection, getDoc, doc} from "firebase/firestore";
import { Spinner } from "../spiner/Spinner";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        const productCollection = collection(db, "productos");
        const refDoc = doc(productCollection, id)

        getDoc(refDoc)
          .then((doc)=>{
            setProduct({id: doc.id, ...doc.data()})
            setLoading(false);
          })
          .catch((error) => {
            setLoading(false);
            console.error("Error getting documents: ", error);
          });
    },[id])

    return (
        <section>
            <div>ItemDetailContainer</div>
            { loading 
            ? <Spinner /> 
            : 
            <ItemDetail {...product}  />
            }
        </section>
    );
};

export default ItemDetailContainer;
