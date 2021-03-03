import { RouteComponentProps, useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { getDataByGenre } from '../data/apiData';
import BrowseItem from "../components/Browse/BrowseItem";
import NavbarMain from "../components/Navbar/NavbarMain";
import MainTitle from "../components/Title/MainTitle";
import BrowseMainItem from "../components/Browse/BrowseMainItem";
import Footer from "../components/Footer/Footer";

interface Prop extends RouteComponentProps<{ name: string }> {
    id: number;
    title_english: string;
    year: number;
    runtime: number;
    summary: string;
    date_uploaded: string;
    background_image_original: string;
}

interface ParamTypes {
    name: string
}


const Browse = ({ match }: Prop) => {


    const { pathname } = useLocation();
    let { name } = useParams<ParamTypes>();
    const [length, setlength] = useState(6);
    const [movie, setMovie] = useState<Prop[]>([]!);

    useEffect(() => {
        (async function () {
            try {
                const s = await getDataByGenre(length, match.params.name);
                setMovie(s.movies);
                // console.log(s.movies);
            } catch (e) {
                throw e;
            }
            // console.log(name)

        })();
        window.scrollTo(0, 0);
        return () => {
            setMovie([]);
        }
    }, [match.params.name, name, length])
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            <NavbarMain />
            <ContainerMain>
                <div className="d-flex justify-content-center">
                    <MainTitle name="Browse Movies" color="#fff" />
                    {/* <h1>{name}</h1> */}
                </div>
                <BrowseItem />
                <div className='d-flex justify-content-center flex-wrap'>
                    {movie.map((m, index) =>
                        <BrowseMainItem
                            key={index}
                            id={m.id}
                            title_english={m.title_english}
                            year={m.year}
                            runtime={m.runtime}
                            summary={m.summary}
                            date_uploaded={m.date_uploaded}
                            background_image_original={m.background_image_original}
                        />

                    )}


                </div>
                <div className="d-flex justify-content-center">
                    <Btn className='btn btn-danger btn-lg' onClick={() => {
                        setlength(length + 3)
                    }}>Show More</Btn>

                </div>
            </ContainerMain>

            <Footer />

        </>
    )
}

export default Browse



const ContainerMain = styled.div`   
  background-color:#131722;
  min-height:100vh;
  max-height:100%;
  padding:9rem 6rem 2rem;
@media (max-width:1334px){
padding:1rem 0;
}
`


const Btn = styled.button`
    background-color:  #E90101;
    margin:3rem 0;  
    :hover{
    background-color:transparent;

    }

`

