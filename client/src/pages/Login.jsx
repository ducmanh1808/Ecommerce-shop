import { useState } from 'react'
import styled from 'styled-components'
import { login } from '../redux/apiCalls'
import { mobile, mobile768 } from '../responsive'
import { useDispatch, useSelector } from "react-redux"
import { Link as LinkRouter} from 'react-router-dom'


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
      ),
      url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
        center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    width: 20%;
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
    justify-content: flex-start;
    align-items: center;
`

const Input = styled.input`
        margin: 10px 0;
        width: 100%;
        font-size: 18px;
        padding: 15px;
`

var Link = styled.a`
    text-decoration: underline;
    margin-bottom: 10px;
    cursor: pointer;
    color: black;
    &:last-child {
        margin-bottom: 0;
    }
    &:active {
        color: black;
    }
`

const Button = styled.button`
        padding: 15px 50px;
        font-size: 18px;
        background-color: teal;
        color: white;
        border: none;
        margin-bottom: 10px;
        cursor: pointer;
        &:focus {
            outline: none;
        }
        &:disabled {
            cursor: not-allowed;
        }
`
const Warning = styled.span`
    color: red;
`

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const {isFetching, error} = useSelector(state => state.user);

    const handleLogin = (e) => {
        e.preventDefault();
        login(dispatch, {username, password});
    }

    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
                    <Input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)}/>
                    <Button onClick={handleLogin} disabled={isFetching}>LOGIN</Button>
                    {error && <Warning>Some thing went wrong!</Warning>}
                    <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
                    <LinkRouter to="/register">
                        <Link>CREATE A NEW ACCOUNT</Link>
                    </LinkRouter>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login