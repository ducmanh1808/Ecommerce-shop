import styled from 'styled-components'
import { mobile, mobile768 } from '../responsive'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Products  from '../components/Products'
import Footer from '../components/Footer'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'

const Title = styled.div`
    font-size: 40px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
`

const FilterContainer = styled.div`
    display: flex;
    align-items:  flex-start;
    justify-content: space-between;
`

const FilterText = styled.span`
    font-size: 18px;
    margin-right: 10px;
    ${ mobile768({marginRight: "5px"})}
    ${ mobile({marginLeft: "5px"})}

`

const Filter = styled.div`
    margin: 10px;
`

const Select = styled.select`
    padding: 10px;
    margin-right: 10px;
    font-size: 16px;
    ${ mobile768({margin: "5px 0 5px 5px", padding: "7px"})}
    ${ mobile({margin: "15px 10px 0 5px"})}
`

const Option = styled.option``

const ProductList = () => {
    const location = useLocation();
    const category = location.pathname.split("/")[2];
    const [filters,setFilter] = useState({});
    const [sort,setSort] = useState("Newest");

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilter({
            ...filters,
            [e.target.name]: value,
        })
    }


    return (
        <div>
            <Navbar/>
            <Announcement/>
            <Title>{category.toUpperCase()}</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select name="color" onChange={handleFilters}>
                        <Option disabled >Color</Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Select>
                    <Select name="size" onChange={handleFilters}>
                        <Option disabled>
                        Size
                        </Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select onChange={ e => setSort(e.target.value)}>
                        <Option value="Newest">Newest</Option>
                        <Option value="Asc">Price (asc)</Option>
                        <Option value="Desc">Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products category={ category } filters={filters} sort={sort} />
            <Footer/>
        </div>
    )
}

export default ProductList
