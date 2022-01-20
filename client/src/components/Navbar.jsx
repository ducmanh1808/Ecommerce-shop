import { mobile, mobile768 } from '../responsive'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOut } from '../redux/userRedux';

const Container = styled.div`
    heigth: 60px;
    margin: 0 10px;
    ${ mobile768({margin: "0 5px"})}
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${ mobile768({padding: "10px 0"})}
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

const Center= styled.div`
    flex: 1;
    text-align: center;
`

const Logo = styled.h1`
    font-weight: bold;
    user-select: none;
    ${ mobile768({fontSize: "24px", marginLeft: "5px"})}

`

const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    ${ mobile({justifyContent: "center", flex: "2"})}

`

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${ mobile768({ display: "none"})}

`

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    ${ mobile768({marginLeft: "0px", padding:"3px"})}
`

const Input = styled.input`
    border: none;
    outline: none;
    ${ mobile768({width: "40px", fontSize: "13px"})}

`

const MenuItems = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${ mobile768({marginLeft: "10px"})}
`
const Logout = styled.span`
    text-decoration: underline;
    cursor: pointer;
`

const Navbar = () => {
    const quantity = useSelector(state => state.cart.cartQuantity)
    const currentUser = useSelector(state => state.user.currentUser)
    const dispatch = useDispatch();

    const LogOut = () => {
        dispatch(logOut());
    }

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search"/>
                        <SearchIcon style={{color: 'gray'}}/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Link to="/" style={{textDecoration: 'none'},{color: 'black'}}>
                        <Logo>ECRMM.</Logo>
                    </Link>
                </Center>
                <Right>
                    {!currentUser ? <>
                        <Link to="/register" style={{color:"black"}}>
                            <MenuItems>REGISTER</MenuItems>
                        </Link>
                        <Link to="/login" style={{color:"black"}}>
                            <MenuItems>SIGN IN</MenuItems>
                        </Link>
                    </> : <Logout onClick={LogOut}>Log Out</Logout>}
                    <Link to="/cart" style={{color:"black"}}>
                        <MenuItems>
                            <Badge badgeContent={quantity} color="primary">
                                <ShoppingCartOutlinedIcon />
                            </Badge>
                        </MenuItems>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar;