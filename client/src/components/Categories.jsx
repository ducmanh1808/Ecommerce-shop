import { categories } from "../data"
import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import { mobile, mobile768 } from "../responsive"

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    ${ mobile({flexDirection: "column"})}
    ${ mobile768({flexDirection: "column"})}
`

const Categories = () => {
    return (
        <Container>
            { categories.map((item) => 
            <CategoryItem item={item} key={item.id} />
                )}         
        </Container>
    )
}

export default Categories
