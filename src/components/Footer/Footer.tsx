import styled from 'styled-components';
import { BsFillHeartFill } from 'react-icons/bs'
const Footer = () => (
    <FooterMain className='d-flex align-items-center flex-column' >

        <p>Made with <BsFillHeartFill style={{ color: '#E90101' }} /> by <a href="https://github.com/MasterBrian99">Masterbrian99</a></p>


    </FooterMain>
);

export default Footer;



const FooterMain = styled.div`
    padding: .5rem;
    background-color: rgb(0, 0, 0);
    color:#fff;
    bottom: 0;
    left: 0;
    width: 100%;


    a{
        color:#fff;
            transition:400ms;
        :hover{
        color:#E90101;
        text-decoration:none;

    }
    }

`


