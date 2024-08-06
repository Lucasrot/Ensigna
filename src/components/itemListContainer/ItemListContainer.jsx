/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import ItemList from '../ItemList/ItemList';
import { getProducts } from "../../util/fetchData.js";
import { useParams } from "react-router-dom";
import { Spinner } from "../spiner/Spinner.jsx";

const ItemListContainer = ({ title }) => {
  const [products, setProducts] = useState([]);

  const { categoriesId } = useParams();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("se cargo el useEffect");
    setLoading(true);
    getProducts(categoriesId)
      .then((res) => {
        console.log("se presento el array");
        setProducts(res);
        console.log("se cargo el array");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("Finally");
        setLoading(false);
      });
  }, [categoriesId]);



  return (
    <section>
      <h2>{title}</h2>
        <div>
          {loading ? <Spinner /> :
            <ItemList products={products} />
          }
        </div>
    </section>
  );
};

export default ItemListContainer