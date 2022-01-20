import { mobile, mobile768 } from '../responsive';
import { Add, DeleteOutline, HighlightOff, Remove } from '@mui/icons-material';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { removeProduct } from '../redux/cartRedux';

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 500;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  ${mobile({ padding: '20px 0' })};
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === 'filled' && 'none'};
  background-color: ${(props) =>
    props.type === 'filled' ? 'black' : 'transparent'};
  color: ${(props) => props.type === 'filled' && 'white'};

  ${mobile({ padding: '5px' })};
`;

const TopTexts = styled.div`
  ${mobile({
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: '15px',
  })};
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
  font-size: 17px;
  ${mobile({ width: '50%' })};
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile768({ flexDirection: 'column' })};
`;

const Info = styled.div`
  flex: 4;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column' })};
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  ${mobile({ flex: '4' })};
`;

const Image = styled.img`
  width: 200px;
  ${mobile({ width: '50%' })};
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  ${mobile({ padding: '10px' })};
`;

const ProductName = styled.span`
  font-size: 17px;
  ${mobile({ marginBottom: '5px' })};
`;

const ProductId = styled.span`
  font-size: 17px;
  ${mobile({ marginBottom: '5px' })};
`;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  border: 1px solid gray;
  ${mobile({ marginBottom: '5px' })};
`;

const ProductSize = styled.span`
  font-size: 17px;
  ${mobile({ marginBottom: '5px' })};
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${mobile({
    flexDirection: 'row',
    margin: '10px 0',
    justifyContent: 'space-around',
  })};
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  ${mobile({ flexDirection: 'row', marginBottom: '0' })};
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  align-self: flex-start;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
  align-self: flex-end;
`;

const SummaryItem = styled.div`
  margin: 2rem 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === 'total' && '500'};
  font-size: ${(props) => (props.type === 'total' ? '24px' : '17px')};
`;

const SummaryItemText = styled.span`
  font-size: 17px;
`;

const SummaryItemPrice = styled.span`
  font-size: 17px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: teal;
  color: white;
  font-weight: 400;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;
const RemoveFrCart = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  color: #f10000;
  margin: 5px;
  background-color: inherit;
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleDelete = (index, product) => {
    const price = product.price * product.quantity;
    console.log(index, price)
    dispatch(removeProduct({price,index}))
  };


  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <TopButton>CONTINUE SHOPPING</TopButton>
          </Link>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product, index) => (
              <React.Fragment key={product._id}>
                <Product>
                  <ProductDetail>
                    <Link to={`/product/${product._id}`}>
                      <Image src={product.img} />
                    </Link>
                    <Details>
                      <ProductName>
                        <b>Product:</b> {product.title}
                      </ProductName>
                      <ProductId>
                        <b>ID:</b> {product._id}
                      </ProductId>
                      <ProductColor color={product.color} />
                      <ProductSize>
                        <b>Size:</b> {product.size}
                      </ProductSize>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <Remove />
                      <ProductAmount>{product.quantity}</ProductAmount>
                      <Add />
                    </ProductAmountContainer>
                    <ProductPrice>
                      $ {product.price * product.quantity}
                    </ProductPrice>
                  </PriceDetail>
                  <RemoveFrCart onClick={() => handleDelete(index, product)}>
                    <HighlightOff />
                  </RemoveFrCart>
                </Product>
                <Hr />
              </React.Fragment>
            ))}
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {cart.totalPrice}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {cart.totalPrice}</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
