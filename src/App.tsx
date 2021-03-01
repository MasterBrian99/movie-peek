import React from 'react';
import styled from 'styled-components';
import CarouselSlide from './components/Carousel/CarouselSlide';
import Latest from './components/Carousel/Latest';


function App() {
  return (
    <Container>
      <CarouselSlide />
      <Latest />
    </Container>
  );
}

export default App;


const Container = styled.div`

height: 100vh;
  background-color: rgb(0, 0, 0);
  img{
    height: 100vh;
    width: 100%;
    opacity: 0.4;
    object-fit: cover;

  }

`