import React from 'react';
import styled from 'styled-components';
import Section from './Section';

function Home() {
  return(     
  <Container>
       <Section
       title='Model S'
       des='Order Online for Touchless Delivery'
       backgroundimg='model-s.jpg'
       leftButton='Custom Order'
       rightButton='Existing Inventory'
       />

       <Section title='Model Y'
       des='Order Online for Touchless Delivery'
       backgroundimg='model-y.jpg'
       leftButton='Custom Order'
       rightButton='Existing Inventory'
/>
       <Section title='Model 3'
       des='Order Online for Touchless Delivery'
       backgroundimg='model-3.jpg'
       leftButton='Custom Order'
       rightButton='Existing Inventory'/>

       <Section title='Model X'
       des='Order Online for Touchless Delivery'
       backgroundimg='model-X.jpg'
       leftButton='Custom Order'
       rightButton='Existing Inventory'/>

       <Section 
       title='Lowest Cast Solar Panels in Pakistan'
       des='Money-back guarantee'
       backgroundimg='solar-panel.jpg'
       leftButton='Custom Order'
       rightButton='Learn more'
       />

       <Section 
       title='Solar for New Roofs'
       des='Solar Roof Costs Less Than a New Roof Plus Solar Panels'
       backgroundimg='solar-roof.jpg'
       leftButton='Custom Order'
       rightButton='Learn more'
       />

       <Section
       title='Accessories'
       des=''
       backgroundimg='accessories.jpg'
       leftButton='Shop Now'
       
       />
    
   </Container>
   ) 
}

export default Home;

const Container = styled.div`
     height: 100vh;
     
`