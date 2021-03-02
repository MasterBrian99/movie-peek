import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import { getData } from '../../data/apiData';
import MovieItem from './MovieItem';
import MainTitle from '../Title/MainTitle';

interface Movies {
    id: number;
    url: string;
    imdb_code: string;
    title: string;
    year: number;
    runtime: number;
    genres: string[];
    summary: string;
    yt_trailer_code: string;
    background_image_original: string;
    large_cover_image: string;
    state: string;
    date_uploaded: string;
}

const MainPage = () => {
    const [movie, setMovie] = useState<Movies[]>([]!);
    const [items, setItems] = useState(8);

    useEffect(() => {

        (async function () {
            try {
                const s = await getData(items);
                // console.log(s.movies);
                setMovie(s.movies);
                // console.log(movie);

            } catch (e) {
                throw e;
            }
        })();
        return () => {
            setMovie([]);
        }
    }, [items])

    return (

        <Main>
            <ContainerDiv fluid>
                <div className='d-flex justify-content-center'>
                    <MainTitle name="Latest Movies" />
                </div>

                <div className='d-flex justify-content-center flex-wrap'>

                    {movie.map((m) =>

                        <MovieItem
                            key={m.id}
                            id={m.id}
                            url={m.url}
                            imdb_code={m.imdb_code}
                            title={m.title}
                            year={m.year}
                            runtime={m.runtime}
                            genres={m.genres}
                            summary={m.summary}
                            yt_trailer_code={m.yt_trailer_code}
                            background_image_original={m.background_image_original}
                            large_cover_image={m.large_cover_image}
                            date_uploaded={m.date_uploaded}
                        />
                    )}
                </div>
                <div className='d-flex justify-content-center'>

                    <Btn className='btn btn-danger btn-lg' onClick={() => { setItems(items + 4) }} >Show More</Btn>

                </div>
            </ContainerDiv>


        </Main>
        // 
    )
}

export default MainPage



const Main = styled.div`
color:#fff;
min-height:100vh;
background-color:#131722;
max-height:100%;


`
const ContainerDiv = styled(Container)`
padding:1rem 6rem;

@media (max-width:1334px){
padding:1rem 0;
    
}
`

const Btn = styled.button`
    background-color:  #E90101;
    :hover{
    background-color:transparent;

    }

`