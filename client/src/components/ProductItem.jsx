import { mobile } from "../responsive"
import styled from 'styled-components'
import { ShoppingCartOutlined,SearchOutlined,FavoriteBorderOutlined } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const Info = styled.div`
    background-color: rgba(0,0,0,0.15);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
    opacity: 0;
    transition: all 0.5s ease;
`

const Container = styled.div`
flex: 1;
    height: 500px;
    margin: 10px;
    background-color: #f5fbfd;
    object-fit: cover;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover ${Info} {
        opacity: 1;
    }

    ${ mobile({height:"50vh"})}
`
const Circle = styled.div`
    width: 350px;
    height: 350px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
    z-index: 1;
    ${ mobile({width: "300px", height: "300px"})}

`
const Image = styled.img`
    height: 80%;
    z-index: 2;
`

const Icon = styled.div`
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    margin: 10px;
    display:flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    cursor: pointer;
    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.1);
    }

    &:active {
        color: inherit;
    }
`


const ProductItem = ({ item }) => {
    return (
        <Container>
            <Circle />
            <Image src={item.img}/>
            <Info>
                <Icon>
                    <ShoppingCartOutlined />
                </Icon>
                
                <Link to={`/product/${item._id}`}>
                    <Icon>
                        <SearchOutlined sx={{ fill: `black` }}/>
                    </Icon>
                </Link>
                <Icon>
                    <FavoriteBorderOutlined />
                </Icon>
            </Info>
        </Container>
    )
}

export default ProductItem
