import { mobile, mobile768 } from '../responsive'
import { useState } from 'react';
import styled from 'styled-components'
import { sliderItems } from '../data';
// import { ArrowLeftOutlinedIcon, ArrowRightOutlinedIcon  } from '@mui/icons-material';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';


const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow:hidden;
    ${ mobile768({height: "45vh"})}
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.5;
    margin: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${(props) => props.direction === "left" && "10px"};
    right: ${(props) => props.direction === "right" && "10px"};
    z-index: 2;
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;   
    transition: 1.5s all ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw)
`
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${(props) => props.bg};
    ${ mobile768({height: "50vh"})}
`

const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
    ${ mobile768({height: "60%"})}
`
const Image = styled.img`
    height: 80%;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
    ${ mobile768({flex: "2", padding: "10px"})}
`
const Title =styled.h1`
    font-size: 70px;
    ${ mobile768({fontSize: "25px"})}
`
const Description = styled.p`
    letter-spacing: 3px;
    margin: 50px 0;
    font-size: 20px;
    ${ mobile768({fontSize: "15px", margin: "25px 0"})}
    
`
const Button =styled.button`
    background-color: transparent;
    font-size: 25px;
    font-weight: 200;
    padding: 20px 40px;
    cursor: pointer;
    border: 1px solid gray;
    &:focus {
        outline: none;
    }
    ${ mobile768({padding: "10px 15px", fontSize:"15px"})}
`


const Slider = (anchor) => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if(direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        }   else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1: 0)
        }       
    }

    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlinedIcon fontSize="large"/>              
            </Arrow>
            <Wrapper slideIndex = {slideIndex}>
                { sliderItems.map((item) => (
                    <Slide bg={item.bg} key={item.id}>
                    <ImgContainer>
                        <Image src={item.img} />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Description>{item.desc}</Description>
                        <Button>SHOP NOW</Button>
                    </InfoContainer>
                </Slide>  ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlinedIcon fontSize="large"/>
            </Arrow>
        </Container>
    )
}

export default Slider
