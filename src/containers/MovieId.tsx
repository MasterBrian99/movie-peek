import { useState, useEffect } from 'react';
import { RouteComponentProps, useParams } from "react-router-dom";
import styled from 'styled-components';
import NavbarMain from "../components/Navbar/NavbarMain";
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import { Container } from 'react-bootstrap';
import YouTube from 'react-youtube';
import BrowseItem from "../components/Browse/BrowseItem";
import MainTitle from '../components/Title/MainTitle';
import Footer from "../components/Footer/Footer";
import { getSingleMovieData } from '../data/apiData';

interface Prop extends RouteComponentProps<{ id: string }> {
    id: number;
    title_english: string;
    year: number;
    runtime: number;
    description_full: string;
    genres: string[];
    language: string;
    date_uploaded: string;
    background_image_original: string;
    yt_trailer_code: string;
    large_cover_image: string
}

interface ParamTypes {
    name: string
}

const MovieId = ({ match }: Prop) => {

    let { name } = useParams<ParamTypes>();

    const [movie, setMovie] = useState<Prop>();

    useEffect(() => {
        (async function () {
            try {
                const s = await getSingleMovieData(match.params.id);
                setMovie(s);
            } catch (e) {
                throw e;
            }

        })();
        return () => {
            setMovie(undefined);
        }
    }, [name, match.params.id])

    return (
        <>
            <ParallaxProvider>
                <NavbarMain />
                <ImgContainer>
                    <ParallaxBanner layers={[
                        {
                            image: movie?.background_image_original,
                            amount: 0.6,
                        }
                    ]}
                        style={{
                            height: '100%',
                        }}>
                    </ParallaxBanner>
                </ImgContainer>
                <ContainerMain className='d-flex flex-column '>

                    <div className='d-flex justify-content-center'>
                        <h1>{movie?.title_english}</h1>
                    </div>
                    <Container>
                        <BannerInfo className='d-flex flex-wrap'>
                            <img src={movie?.large_cover_image} alt={movie?.title_english} />
                            <div className='ml-4 d-flex flex-column mt-2'>
                                <p>Year: {movie?.year}</p>
                                <div className='d-flex flex-wrap '>
                                    {movie?.genres.map((g, index) =>
                                        <p className='mr-1' key={index}>{g}/</p>
                                    )}

                                </div>
                                <p>Runtime : {movie?.runtime} min</p>
                                <p>Uploaded Date :{movie?.date_uploaded}</p>
                                <p>Language: {movie?.language}</p>

                            </div>

                        </BannerInfo>
                        <div className='d-flex mt-4 flex-column '>

                            <p>Description : {movie?.description_full}</p>

                            <div className="d-flex justify-content-center">

                                <YtYouTube videoId={movie?.yt_trailer_code.length !== 0 ? movie?.yt_trailer_code : "dQw4w9WgXcQ"} />
                            </div>

                        </div>
                        <div className='d-flex flex-column justify-content-center'>
                            <MainTitle name="Browse More movies" color="#fff" />
                            <BrowseItem />
                        </div>
                    </Container>
                </ContainerMain>
                <Footer />

            </ParallaxProvider>
        </>
    )
}

export default MovieId


const ImgContainer = styled.div`
    height:70vh;
    width:100%;
    background-color:#131722;
`

const ContainerMain = styled.div`   
font-family: 'Arimo', sans-serif;
  background-color:#131722;
  min-height:100vh;
  max-height:100%;
  color:#ffffff;
  padding:1rem 6rem 2rem;
@media (max-width:1334px){
padding:1rem 0;
}

    h1{
        font-size:4rem;
        font-weight:700;
        padding:1rem; 
    }

`
const BannerInfo = styled.div`

    img{
        height:400px;
    }

        p{
            font-weight:600;
            font-size:1.3rem;
        }
`

const YtYouTube = styled(YouTube)`

        @media (max-width:689px){
            height:240px;
            width:420px;
        }

`