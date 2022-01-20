import styled  from "styled-components";
import { mobile, mobile768 } from "../responsive"
import { Link } from "react-router-dom";


const Container = styled.div`
    flex: 1;
    margin: 5px;
    height: 70vh;
    position: relative;

`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${ mobile({height: "40vh"})}
    ${ mobile768({height: "40vh"})}
`
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease-out;

    &:hover{
        background-color: rgb(211, 211, 211, 0.3);
    }
`
const Title = styled.h1`
    font-size: 40px;
    color: white;
    margin-bottom: 15px;
    text-align: center;
`
const Button = styled.button`
    padding: 10px 15px;
    background-color: white;
    border: none;
    cursor: pointer;
    font-weight: 500;
    &:focus {
        outline: none;
    }
`


const CategoryItem = ({ item }) => {
    return (
        <Container>
            <Link to={`products/${item.cat}`}>
                <Image src={item.img} />
                <Info>
                    <Title>{item.title}</Title>
                    <Button>SHOP NOW</Button>
                </Info>
            </Link>
        </Container>
    )
}

export default CategoryItem
