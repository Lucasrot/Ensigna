/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { getProductsById } from '../../util/fetchData.js'
import { Spinner } from "../spiner/Spinner.jsx";
import ItemDetail from '../itemDetail/ItemDetail';
const ItemDetailConteiner = () => {

    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true);
    const { id } = useParams()

    useEffect(() => {
        setLoading(true);
        getProductsById(id)
            .then((res) => {
                setProduct(res);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

    return (

        <main>
            <h2>ItemDetailConteiner</h2>
            <div>
                {loading ? <Spinner /> :
                    <ItemDetail product={product} />
                }
            </div>
        </main>

    )
}

export default ItemDetailConteiner