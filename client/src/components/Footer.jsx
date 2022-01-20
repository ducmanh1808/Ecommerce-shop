import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@mui/icons-material'
import styled from 'styled-components'
import { mobile, mobile768 } from "../responsive"


const Container = styled.div`
    display: flex;
    align-item: center;
    justify-content: space-around;
    padding: 15px;
    ${ mobile768({flexWrap: "wrap"})};
    ${ mobile768({flexDirection: "column", padding: "10px"})}
`

const Left = styled.div`
    flex: 1;
    padding: 20px;
   
`

const Logo = styled.h1``

const Description = styled.p`
    margin: 20px 0;
    font-size: 17px;
    letter-spacing: 1px;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #${(props) => props.bg};
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
`


const Center = styled.div`
    flex: 1;
    padding: 20px;    
`

const Title = styled.h3`
    margin-bottom: 20px;
`

const List = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;

`

const Right = styled.div`
    flex: 1;
`

const ContactItem = styled.div`
    margin-bottom: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;    
`

const Payment = styled.img`
    width: 50%;
    margin-top: 10px;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>ECRMM.</Logo>
                <Description>
                    There are many variations of passages of Lorem Ipsum available, but
                    the majority have suffered alteration in some form, by injected 
                    humour, or randomised words which don’t look even slightly believable.
                </Description>
                <SocialContainer>
                    <SocialIcon bg="3B5999">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon bg="E4405F">
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon bg="55ACEE">
                        <Pinterest/>
                    </SocialIcon>
                    <SocialIcon bg="E60023">
                        <Twitter/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                    <Title>Contact</Title>
                <ContactItem>
                    <Room style={{marginRight:"10px"}}/> 622 Dixie Path , South Tobinchester 98336
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight:"10px"}}/> +1 234 56 78
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{marginRight:"10px"}} /> contact@abcdefghijklmnopqrst
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    )
}

export default Footer
