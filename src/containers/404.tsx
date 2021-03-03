import styled from 'styled-components';
import Footer from '../components/Footer/Footer';
import img from '../img/PicsArt_03-03-07.20.28.jpg';
import { Link } from "react-router-dom";

const Error404 = () => {
    return (
        <>
            <ContainerMain className='d-flex align-items-center flex-column'>

                <h1>404 -Page not found</h1>
                <img src={img} alt="404" />
                <NavLink to='/'>Go back</NavLink>
            </ContainerMain>
            <Footer />
        </>
    )
}

export default Error404

const ContainerMain = styled.div`   
  background-color:#131722;
  min-height:100vh;
  max-height:100%;
    h1{
        padding:4rem 0;
        font-size:3rem;
        color:#fff;
        text-transform:uppercase;
        font-weight:700;
        text-align:center;
    }

    img{
        height:400px;
    }

`


const NavLink = styled(Link)`
border: 1px solid  #ff0000;
padding:1rem 3rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-size: 1.2rem;
    margin-right: 2rem;
    color: #ffffff;
    font-weight: 800;
    transition: all 400ms;

    :hover {
      color: #ff0000;
      text-decoration: none;
    }

`