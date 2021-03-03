import { RouteComponentProps, useParams } from "react-router-dom"
import { useState, useEffect } from 'react';
import { getOMDbData } from '../data/apiData';
import styled from 'styled-components';
import NavbarMain from "../components/Navbar/NavbarMain";
import MainTitle from "../components/Title/MainTitle";
import BrowseItem from "../components/Browse/BrowseItem";
import { Container } from 'react-bootstrap';
import Footer from "../components/Footer/Footer";

interface Prop extends RouteComponentProps<{ name: string }> {
    Title: string;
    Year: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Plot: string;
    Language: string;
    Poster: string;
}

interface ParamTypes {
    name: string
}
const MovieName = ({ match }: Prop) => {

    let { name } = useParams<ParamTypes>();

    const [movie, setMovie] = useState<Prop>();

    useEffect(() => {
        (async function () {
            try {
                const s = await getOMDbData(match.params.name);
                setMovie(s);
            } catch (e) {
                throw e;
            }

        })();
        return () => {
            setMovie(undefined);
        }
    }, [match.params.name, name])

    return (
        <>

            <ContainerMain className='d-flex align-items-center  flex-column'>
                <NavbarMain />
                <h1>{movie?.Title}</h1>

                <BannerInfo className="d-flex flex-wrap">
                    <img src={movie?.Poster} alt="" />
                    <div className='ml-4 d-flex flex-column mt-2'>
                        <p>Year: {movie?.Year}</p>
                        <div className='d-flex flex-wrap '>
                            <p className='mr-1' >{movie?.Genre}</p>

                        </div>
                        <p>Runtime : {movie?.Runtime} </p>
                        <p>Director : {movie?.Director}</p>
                        <p>Language: {movie?.Language} </p>
                    </div>
                </BannerInfo>
                <div className='d-flex mt-4 flex-column '>
                    <Container>

                        <p>Description : {movie?.Plot} </p>
                    </Container>
                </div>
                <div className='d-flex flex-column justify-content-center'>
                    <Container className='mt-4'>

                        <MainTitle name="Browse More movies" color="#fff" />
                        <BrowseItem />
                    </Container>
                </div>
            </ContainerMain >
            <Footer />
        </>
    )
}

export default MovieName

const ContainerMain = styled.div`   
font-family: 'Arimo', sans-serif;
background-color:#131722;
min-height:100vh;
max-height:100%;
color:#ffffff;

  padding:10rem 6rem 2rem;
@media (max-width:1334px){
padding:5rem 1rem 0;
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
