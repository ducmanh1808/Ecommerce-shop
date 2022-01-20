import styled from 'styled-components'

const Container = styled.div`
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: teal;
    color:white;
    font-size: 15px;
    font-weight: 400;
`

const Anouncement = () => {
    return (
        <Container>
            Super Deal! Free Shipping on Orders Over 50$
        </Container>
    )
}

export default Anouncement