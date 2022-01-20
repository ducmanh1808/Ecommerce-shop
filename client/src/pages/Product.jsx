import styled from 'styled-components';

import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import { Add, Remove } from '@mui/icons-material';
import { mobile, mobile768 } from '../responsive';
import { publicRequest } from '../requestMethods';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { addProduct, updateProduct } from '../redux/cartRedux';
import { useDispatch, useSelector } from 'react-redux';

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  padding: 50px;
  ${mobile({ flexDirection: 'column', padding: '10px' })}
  ${mobile768({ padding: '20px 10px' })}
`;

const ImgContainer = styled.div`
  flex: 1.5;
`;

const Image = styled.img`
  width: 100%;
  height: 70vh;
  object-fit: fit;
  ${mobile768({ height: '90%' })}
`;

const InfoContainer = styled.div`
  flex: 2;
  padding: 0 50px;
  ${mobile({ padding: '5px' })};
  ${mobile768({ padding: '10px 0 5px 15px' })};
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 300;
  ${mobile({ fontSize: '30px' })}
`;

const Desc = styled.p`
  font-size: 20px;
  font-weight: 300;
  margin: 30px 0;
  ${mobile768({ fontSize: '18px', margin: '15px 0' })}
`;

const Price = styled.span`
  font-size: 50px;
  font-weight: 100;
  ${mobile({ fontSize: '35px' })}
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  ${mobile({ flexDirection: 'column', width: '100%' })}
`;

const Filter = styled.div`
  margin: 30px 0;
  display: flex;
  align-items: center;
  ${mobile({ margin: '15px 0' })}
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 300;
  margin-right: 10px;
`;

const FilterColor = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  border: 1px solid gray;
  margin-right: 10px;
  cursor: pointer;
  ${mobile({ width: '30px', height: '30px' })}
`;

const FilterSize = styled.select`
  padding: 10px;
  font-size: 18px;
  font-weight: 300;
  cursor: pointer;
  ${mobile({ padding: '5px', fontSize: '16px' })}
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  ${mobile768({ width: '100%', padding: '10px' })}
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  font-size: 25px;
  ${mobile({ fontSize: '30px' })}
`;
const Amount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid gray;
  margin: 0 15px;
  ${mobile({ width: '40px', height: '40px' })}
`;
const Button = styled.button`
  background-color: white;
  border: 2px solid teal;
  padding: 15px 20px;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    background-color: rgba(0, 128, 128, 0.2);
  }

  &:focus {
    outline: none;
  }

  ${mobile768({ marginRight: '20px' })}
`;

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const [product, setProduct] = useState({});
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.products);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get('products/find/' + id);
        setProduct(res.data);
        setColor(res.data.color[0]);
        setSize(res.data.size[0]);
      } catch {}
    };
    getProduct();
  }, [id]);

  const handleAmount = (type) => {
    if (type === 'asc') {
      setQuantity(quantity + 1);
    } else {
      quantity > 1 && setQuantity(quantity - 1);
    }
  };

  const handleClick = () => {
    const { _id, title, price, img, ...others } = product;
    const duplicateItem = cart.findIndex(
      (item) => item._id === _id && item.color === color && item.size === size
    );
    {duplicateItem !== -1
      ? dispatch(updateProduct({ duplicateItem, quantity, price }))
      : (dispatch(addProduct({ title, _id, price, img, quantity, color, size })));}
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>VND {product.price}</Price>

          <FilterContainer>
            <Filter>
              <FilterTitle>Color:</FilterTitle>
              {product.color?.map((c) => (
                <FilterColor onClick={() => setColor(c)} color={c} key={c} />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size:</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map(
                  (s) =>
                    s !== '' && <FilterSizeOption key={s}>{s}</FilterSizeOption>
                )}
              </FilterSize>
            </Filter>
          </FilterContainer>

          <AddContainer>
            <AmountContainer>
              <Remove
                onClick={() => handleAmount('desc')}
                style={{ cursor: 'pointer' }}
              />
              <Amount>{quantity}</Amount>
              <Add
                onClick={() => handleAmount('asc')}
                style={{ cursor: 'pointer' }}
              />
            </AmountContainer>
            <Button onClick={handleClick}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Product;
