import styled from 'styled-components';
import MovieItem from '../components/Latest/MovieItem';
import NavbarMain from '../components/Navbar/NavbarMain';
import { Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { getData } from '../data/apiData';
import Footer from '../components/Footer/Footer';
import MainTitle from '../components/Title/MainTitle';
import { useLocation } from 'react-router-dom';


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
    date_uploaded: string;
}
const Latest = () => {
    const { pathname } = useLocation();

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
    }, [items]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <ContainerMain>
            <NavbarMain />
            <TextDiv className="d-flex justify-content-center">
                <MainTitle name="Latest Movies" color="#fff" />

            </TextDiv>
            <ContainerItem fluid className='d-flex flex-wrap justify-content-center'>

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

            </ContainerItem>
            <div className='d-flex justify-content-center'>

                <Btn className='btn btn-danger btn-lg' onClick={() => { setItems(items + 4) }} >Show More</Btn>

            </div>
            <Footer />
        </ContainerMain>
    )
}

export default Latest


const ContainerMain = styled.div`   
  background-color:#131722;
  min-height:100vh;
  max-height:100%;

`

const ContainerItem = styled(Container)`
padding:1rem 6rem 2rem;
@media (max-width:1334px){
padding:1rem 0;
}
`

const Btn = styled.button`
    background-color:  #E90101;
    margin-bottom:1rem;
    :hover{
    background-color:transparent;

    }

`

const TextDiv = styled.div`
padding-top:8rem;
`