import styled from 'styled-components'
import { mobile, mobile768 } from '../responsive'


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
      ),
      url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
        center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    width: 30%;
    background-color : white;
    padding: 30px;
    ${ mobile768({width: "60%"})}
    ${ mobile({width: "70%"})}
`

const Title = styled.h1`
    font-weight: 200;
    margin-bottom: 20px;
`

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

const Input = styled.input`
        margin: 10px 0;
        width: 100%;
        font-size: 18px;
        padding: 15px;
    ${ mobile768({padding: "5px"})}
        
`

const Agreement = styled.span`
        font-size: 18px;
        font-weight: 300;
        margin: 15px 0;
`

const Button = styled.button`
        padding: 15px 50px;
        font-size: 18px;
        background-color: teal;
        color: white;
        border: none;
        cursor: pointer;
`


const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="First name"/>
                    <Input placeholder="Last name"/>
                    <Input placeholder="Username"/>
                    <Input placeholder="Email"/>
                    <Input placeholder="Password"/>
                    <Input placeholder="Confirm password"/>
                    <Agreement>
                    By creating an account, I consent to the processing of my personal
                    data in accordance with the <b style={{textDecoration: 'underline'}}>PRIVACY POLICY</b>
                    </Agreement>
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
