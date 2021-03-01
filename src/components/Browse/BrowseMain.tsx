
import styled from 'styled-components';
import MainTitle from '../Title/MainTitle';
import BrowseItem from './BrowseItem';
import { genres } from '../../data/mainData';
const BrowseMain = () => {
    return (
        <Main>
            <div className='d-flex justify-content-center'>
                <MainTitle name="Browse" />
            </div>
            <div className='d-flex justify-content-center'>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className="d-flex flex-wrap justify-content-center">
                {genres.map((g, index) => <BrowseItem key={index} genre={g} />)}

            </div>
            <div>

            </div>
        </Main>
    )
}

export default BrowseMain


const Main = styled.div`

    height:100%;
    background-color:#ffffff;
    padding:1rem 6rem;

@media (max-width:1334px){
padding:1rem 0;
    }

`
