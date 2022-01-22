import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { mobile, mobile768 } from '../responsive';
import { useNavigate } from 'react-router-dom';
import { publicRequest } from '../requestMethods';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 30%;
  background-color: white;
  padding: 30px;
  ${mobile768({ width: '60%' })}
  ${mobile({ width: '70%' })}
`;

const Title = styled.h1`
  font-weight: 200;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  margin: 10px 0;
  width: 100%;
  font-size: 18px;
  padding: 15px;
  ${mobile768({ padding: '5px' })}
`;

const Agreement = styled.span`
  font-size: 18px;
  font-weight: 300;
  margin: 15px 0;
`;

const Button = styled.button`
  padding: 15px 50px;
  font-size: 18px;
  background-color: teal;
  color: white;
  border: none;
  cursor: pointer;
`;

const Register = () => {
  const [pw, setPassword] = useState({});
  const [inputs, setInputs] = useState({});
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    if (!error) {
      //         const { userName: username, email } = inputs;
      // const { password } = pw;
      // console.log(username, email, password);
      const register = async () => {
        const { userName: username, email } = inputs;
        const { password } = pw;
        try {
          const res = await publicRequest.post('/auth/register', {
            username,
            email,
            password,
          });
          console.log(res.data);
          navigate('/login');
        } catch (error) {
          console.log(error);
        }
      };
      register();
    }
  };
  useEffect(() => {
    if (pw.password !== pw.cfPassword && pw.cfPassword) {
      setError(true);
    } else setError(false);
  }, [pw]);
  const handlePassword = (e) => {
    setPassword((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleInput = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input
            type="text"
            name="Fname"
            placeholder="First name"
            required
            onChange={handleInput}
          />
          <Input
            type="text"
            name="Lname"
            placeholder="Last name"
            required
            onChange={handleInput}
          />
          <Input
            type="text"
            name="userName"
            placeholder="Username"
            required
            onChange={handleInput}
          />
          <Input
            type="text"
            name="email"
            placeholder="Email"
            required
            onChange={handleInput}
          />
          <Input
            name="password"
            type="password"
            placeholder="Password"
            required
            autocomplete="on"
            onChange={handlePassword}
          />
          <Input
            name="cfPassword"
            type="password"
            placeholder="Confirm password"
            required
            autocomplete="on"
            onChange={handlePassword}
          />
          {error && (
            <span style={{ color: 'red', marginBottom: '5px' }}>
              The password is incorrect!
            </span>
          )}
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the{' '}
            <b style={{ textDecoration: 'underline' }}>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handleClick}>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
