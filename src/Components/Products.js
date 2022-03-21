// import React, {Component} from 'react';
import React, { useState } from 'react'
import Filter from './Filter'
import ProductsJson from './Products.json'
import Productss from './Productss'
// import filter from './Filter'
const stringToNumber = (str) => {
    return parseFloat(str.replace(/[^0-9.]/g, ''));
}

const sortAscPrice = (a, b) => {
    if (a.price < b.price) {
        return -1;
    }
    if (a.price > b.price) {
        return 1;
    }
    // a must be equal to b
    return 0;
}
const sortDescPrice = (a, b) => {
    if (a.price > b.price) {
        return -1;
    }
    if (a.price < b.price) {
        return 1;
    }
    // a must be equal to b
    return 0;
}

const Products = () => {
    const [productFilterValue, updateProductFilterValue] = useState('')
    const [productSortValue, updateProductSortValue] = useState('')
    console.log('sort = ', productSortValue)
    const filteredProducts = ProductsJson.filter((val) => {
        if (productFilterValue === "") {
            return true
        } else if (val.name.toLowerCase().includes(productFilterValue.toLowerCase())) {
            return true
        } else if (val.price === stringToNumber(productFilterValue)) {
            return true
        } else if (val.image.toLowerCase().includes(productFilterValue.toLowerCase())) {
            return true
        }
        return false
    })
    if (productSortValue === 'price_asc') {
        filteredProducts.sort(sortAscPrice)
    } else if (productSortValue === 'price_desc') {
        filteredProducts.sort(sortDescPrice)
    }
    const productComponents = filteredProducts.map((val, key) => {
        return (
            <Productss key={key} {...val} />
        );
    });
    return (

        <div className="small-container">
            <div className="row row-2">
                <h2>All Products</h2>
                <Filter onChange={value => {
                    updateProductFilterValue(value)
                }} />
                {/* <label> <input type="text" name="Search" placeholder="Search Products" /></label> */}
                <select id="price" onChange={e => updateProductSortValue(e.target.value)}>

                    <option value="">Default Sorting</option>
                    <option value="price_asc">Sort by Price, Ascending</option>
                    <option value="price_desc">Sort by Price, Descending</option>

                </select>


            </div>


            <div className="grid-container">
                {productComponents}

            </div>
        </div>

    )
}
export default Products;
