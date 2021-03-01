import React from 'react';
import styled from 'styled-components';
import BrowseMain from './components/Browse/BrowseMain';
import CarouselSlide from './components/Carousel/CarouselSlide';
import Footer from './components/Footer/Footer';
import MainPage from './components/Suggestions/MainPage';

function App() {
  return (
    <Container>
      <CarouselSlide />
      <MainPage />
      <BrowseMain />
      <Footer />
    </Container>
  );
}

export default App;


const Container = styled.div`
  background-color: rgb(0, 0, 0);


`