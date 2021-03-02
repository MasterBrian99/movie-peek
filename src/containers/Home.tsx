import styled from 'styled-components';
import NavbarMain from '../components/Navbar/NavbarMain';
import CarouselSlide from '../components/Carousel/CarouselSlide';
import Suggestions from '../components/Latest/MainPage';
import Browse from '../components/Browse/BrowseMain';
import Footer from '../components/Footer/Footer';

const Home = () => {
    return (
        <Container>
            <NavbarMain />
            <CarouselSlide />
            <Suggestions />
            <Browse />
            <Footer />
        </Container>
    )
}

export default Home


const Container = styled.div`
  background-color: rgb(0, 0, 0);
  min-height:100vh;
  max-height:100%;
`