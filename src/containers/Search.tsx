import SearchBar from "../components/Search/SearchBar"
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import MainTitle from "../components/Title/MainTitle";
import NavbarMain from '../components/Navbar/NavbarMain';
import BrowseItem from "../components/Browse/BrowseItem";
import Footer from '../components/Footer/Footer';
const Search = () => {
    return (
        <>
            <NavbarMain />

            <ContainerMain className='d-flex flex-column justify-content-center'>
                <Container>
                    <SearchBar />

                </Container>
                <div className='d-flex flex-column justify-content-center'>
                    <Container>
                        <MainTitle name="Browse More movies" color="#fff" />
                        <BrowseItem />
                    </Container>
                </div>
            </ContainerMain>
            <Footer />

        </>
    )
}

export default Search


const ContainerMain = styled.div`
    height:100vh;
    background-color:#131722;
`