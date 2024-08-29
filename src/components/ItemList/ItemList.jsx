/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './itemList.css'
import Item from '../item/Item'

const ItemList = ({ products }) => {

    return (
        <>
            <div className="item-list">
                {products.map((product) => {
                    return <Item key={product.id} product={product} />
                })}
            </div>
        </>
    )
}

export default ItemList;