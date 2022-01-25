import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';




function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false)
    const cars = useSelector(selectCars)
    console.log(cars);

  return(

      <Container>
          <a>
              <img src='/images/logo.svg' alt='' />
          </a>
          <Menu>
              
              <p><a href='#'>Model S </a></p>
              <p><a href='#'>Model Y </a></p>
              <p><a href='#'>Model 3 </a></p>
              <p><a href='#'>Model X </a></p>
          </Menu>
         <RightMenu>
             <p><a href='#'>Shop</a></p>
             <p><a href='#'>Tesla Account</a></p>
      <CustomMenu onClick={ () => setBurgerStatus(true) }/>
         </RightMenu>
      <BurgerNav show={ burgerStatus }>
          <CloseWrappre>
          <CloseIcon onClick={() => setBurgerStatus(false)}/>
          </CloseWrappre>
          <li><a href='#'>Existing Inventory</a></li>
          <li><a href='#'>Used Inventory</a></li>
          <li><a href='#'>Trade-in</a></li>
          <li><a href='#'>Cybertruck</a></li>
          <li><a href='#'>Roadaster</a></li>
          <li><a href='#'>Semi</a></li>
      </BurgerNav>
      </Container>
) 
 }

export default Header;

const Container = styled.div`
min-height: 60px;
position: fixed;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 20px;
top: 0;
left: 0;
right: 0;
z-index: 1;
`
const Menu = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex: 1;
p{
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: no-wrap;
}

@media(max-width: 768px) {
    display: none
}
`
const RightMenu = styled.div`
display: flex;
align-items: center;

p{
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    flex-wrap: no-wrap;
}
`
const CustomMenu = styled( MenuIcon )`
cursor: pointer;
`
const BurgerNav = styled.div`
position: fixed;
top: 0;
bottom: 0;
right: 0;
background: white;
width: 300px;
z-index: 16;
list-style: none;
padding: 20px;
display: flex;
flex-direction: column;
text-align: start;
transform: ${props => props.show ? 'translateX(0%)' : 'translateX(100%)'};
transition: transform 0.5s ease-in;
li{
    padding: 15px 0;
    border-bottom: 1px solid black;

    a{
        font-weight: 600;
    }
}
`

const CustomClose = styled(CloseIcon)`
cursor: pointer;
`
const CloseWrappre = styled.div`
display: flex;
justify-content: flex-end;
`
