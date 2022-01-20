import styled from 'styled-components'
import SendIcon from '@mui/icons-material/Send';
import { mobile, mobile768 } from "../responsive"

const Container = styled.div`
    width: 100%;
    height: 70vh;
    background-color: #fcf5f5;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    margin: 5px 0;
    ${ mobile768({height: "50vh"})}
`

const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 55px;
    ${ mobile({fontSize: "40px"})}
    
`

const Description = styled.p`
    font-size: 40px;
    font-weight: 200;
    letter-spacing: 3px;
    margin-bottom: 55px;
    text-align: center;
    ${ mobile({fontSize: "25px", fontWeight: "300"})}
`

const InputContainer = styled.div`
    width: 50%;
    height: 50px;
    display: flex;
    ${ mobile({height: "40px", width: "80%"})}

`

const Input = styled.input`
    flex: 8;
    border: 1px solid gray;
    padding-left: 10px;
    font-size: 22px;
    font-weight: 300;

    &:focus{
        outline: 1px solid gray;;
    }

    ${ mobile({fontSize: "18px", flex: "6"})}

`

const Button = styled.button`
    flex: 1;
    background-color: teal;
    color: white;
    border: 1px solid teal;
    cursor: pointer;

    &:focus{
        outline: none;
    }
`


const Newsletter = () => {
    return (
        <Container>
            <Title>NEWSLETTER</Title>
            <Description>Get timely update from your favorite produtcs</Description>
            <InputContainer>
                <Input placeholder='Your Email'/>
                <Button>
                    <SendIcon />
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter
