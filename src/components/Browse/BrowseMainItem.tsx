import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import LazyLoad from 'react-lazyload';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import cogoToast from 'cogo-toast';

interface Prop {
    id: number;
    title_english: string;
    year: number;
    runtime: number;
    summary: string;
    date_uploaded: string;
    background_image_original: string;
}

const BrowseMainItem = ({ id, title_english, year, runtime, summary, date_uploaded, background_image_original }: Prop) => {

    let history = useHistory();

    const summaryLength = 120;
    const title_englishLength = 40;
    return (
        <Container className="text-white" onClick={async () => {
            const res = await axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
            console.log(res.data.data.movie.id);
            res.data.data.movie.id !== 0 ? history.push(`/movie/id/${id}`) : cogoToast.warn("Something wrong !");

        }}>
            <LazyLoad>
                <Card.Img src={background_image_original} alt="Card image" />
            </LazyLoad>
            <Card.ImgOverlay>
                <div className='d-flex flex-column'>
                    <Title>{title_english.length > title_englishLength ? title_english.substring(0, title_englishLength) + '...' : title_english}</Title>
                    <Description>

                        {summary.length > summaryLength ? summary.substring(0, summaryLength) + '...' : summary}
                    </Description>
                    <Info className='d-flex justify-content-center'>
                        <p>{date_uploaded}</p>
                        <p>{runtime} min</p>
                        <p>{year}</p>
                    </Info>
                </div>

            </Card.ImgOverlay>
        </Container>
    )
}

export default BrowseMainItem


const Container = styled(Card)`
    width:30rem;
    background-color:#000000;
    border-radius:5px;
    min-height:15rem;   
    margin:1rem;
    border:none;
    transition:400ms;
    img{
   height:15rem;   
   border-radius:5px;

        object-fit:cover;
        opacity:0.5;
    }
    :hover{
        transform: scale(1.05); 
        cursor: pointer;
    }

`
const Title = styled.h3`
    font-weight:700;
    font-size:2.1rem; 
`

const Description = styled.p`
    font-weight:700;
`

const Info = styled.div`

    p{
    font-family: 'Noto Sans', sans-serif;
    margin:0 .3rem;
    font-weight:700;

    text-shadow: .4px 0 #000000; 

        &:first-child{
            color: #0080ff;
        }

        &:not(:first-child,:last-child){
  
  color: #E90101;
}
    }
`