import { mobile } from "../responsive"
import { popularProducts } from '../data'
import styled from 'styled-components'

import ProductItem from './ProductItem'
import { useState,useEffect } from "react"
import axios from "axios"

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;   
`

const Products = ({category, filters, sort}) => {
    const [products,setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
          try {
            const res = await axios.get(
                category
                ? `http://localhost:5000/api/products?category=${category}`
                : "http://localhost:5000/api/products"
            );
            setProducts(res.data);
          } catch (err) {}
        };
        getProducts();
      }, [category]);
      useEffect(() => {
        category &&
          setFilteredProducts(
            products.filter((item) =>
              Object.entries(filters).every(([key, value]) =>
                item[key].includes(value)
              )
            )
          );
      }, [products, category, filters]);

    useEffect( () => {
        if(sort === "Newest"){
            setFilteredProducts( prev => 
                [...prev].sort((a,b) => a.createdAt - b.createdAt))
        } else if(sort === "Asc"){
            setFilteredProducts( prev => 
                [...prev].sort((a,b) => a.price - b.price))
        } else {
            setFilteredProducts( prev => 
                [...prev].sort((a,b) => b.price - a.price))
        }
    },[sort])

    return (
        <Container>
            {category ? filteredProducts.map((item) => 
            <ProductItem key={item._id} item={item} />
            ) : products.map((item) => 
            <ProductItem key={item._id} item={item} />
            )}            
        </Container>
    )
}

export default Products
