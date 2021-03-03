import { useState, useEffect } from 'react'
import { Carousel, } from 'react-bootstrap';
import axios from 'axios';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import cogoToast from 'cogo-toast';
interface Movies {
  id: number;
  title: string;
  title_english: string;
  year: number;
  runtime: number;
  genres: string[];
  summary: string;
  yt_trailer_code: string;
  background_image_original: string;
}
const CarouselSlide = () => {

  const [index, setIndex] = useState(0);
  const [movie, setMovie] = useState<Movies[]>([]!);

  const handleSelect = (selectedIndex: number, e: any) => {
    setIndex(selectedIndex);
  };
  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(
          `https://yts.mx/api/v2/movie_suggestions.json?movie_id=${Math.floor(Math.random() * 10)}`);
        const json = await response.data;

        const data: Movies[] = json.data.movies;

        setMovie(data);
        // console.log(data);

      } catch (e) {
        console.error(e);
      }
    })();
    return () => {
      setMovie([]);
    }
  }, [])
  let history = useHistory();
  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect} keyboard slide touch wrap pause={false}>
        {movie.map((m) =>
          <Carousel.Item key={m.id}>
            <Img
              src={m.background_image_original}
              alt={m.title_english}
            />
            <Carousel.Caption>
              <CaptionDiv >
                <h4>suggestions</h4>
                <h2>{m.title}</h2>
                <CaptioninfoDiv className='mr-auto flex-wrap'>
                  <p className='mr-3'>{m.year}</p>

                  {m.genres.map((g, i) =>
                    <p className='mr-1' key={i}>{g}</p>

                  )}

                  <p className='ml-3'>{m.runtime} min</p>
                </CaptioninfoDiv>
                <CaptionInfoMain >
                  <p>{m.summary.slice(0, 200)}<Readmore onClick={async () => {
                    const res = await axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${m.id}`);
                    res.data.data.movie.id !== 0 ? history.push(`/movie/id/${m.id}`) : cogoToast.warn("Something wrong !");

                  }}> Read more...</Readmore> </p>
                  <a href={m.yt_trailer_code.length !== 0 ? `https://www.youtube.com/watch?v=${m.yt_trailer_code}` : `https://www.youtube.com/watch?v=${'dQw4w9WgXcQ'}`} target="_blank" rel="noreferrer" className='btn btn-danger btn-lg'>Watch Trailer</a>
                </CaptionInfoMain>
              </CaptionDiv>

            </Carousel.Caption>

          </Carousel.Item>

        )}
      </Carousel>
    </>
  )
}
export default CarouselSlide



const CaptionDiv = styled.div`
display: flex;
align-items: flex-start;
flex-direction: column;
height: 100%;
margin-bottom: 12rem;


h4{
font-family: 'Noto Sans', sans-serif;
  font-weight: 700;
    text-transform: uppercase;
  font-size: 1.1rem;
  border-left: 3px solid rgb(255, 0, 0);
  padding-left: .5rem;
  color: #B5B5B5;
  }

  h2{
    text-transform: uppercase;
    font-size: 5rem;
    font-weight: 800;
    text-align: left;

  }
 
  @media (max-width: 1200px) { 
    margin-bottom: 9rem;
    h2{
      font-size: 4rem;
    }
   }
   @media (max-width: 992px) { 
    margin-bottom: 2rem;
    h2{
      font-size: 3rem;
    }
   }

`

const CaptioninfoDiv = styled.div`
  display: flex;
  p{
    font-family: 'Noto Sans', sans-serif;
        font-weight: 700;
        font-size: 1.2rem;
    &:not(:first-child,:last-child){
  
        color: #E90101;
      /* text-shadow: 1px 0 #ffffff; */
      }
  }


  @media (max-width: 1056px) { 
   }
  @media (max-width: 992px) { 
    p{
      font-size: 1rem;
    }
   }
`

const CaptionInfoMain = styled.div`
  display: flex;
  flex-direction: column;
  p{text-align: left;
    font-size: 1.3rem;
    font-family: 'Noto Sans', sans-serif;

  }
  a{
    background-color: #E90101;
    width: 10rem;
    font-weight: 700;
    
    &:hover{
      background-color: transparent;
      border: 1px solid #E90101;
      color: #fff;
    }
  }

  @media (max-width: 992px) { 
    p{
      font-size: 1rem;
    }
   }

`

const Readmore = styled.span`
color:#E90101;

:hover{
  cursor: pointer;
}
`

const Img = styled.img`

height: 100vh;
  width: 100%;
  opacity: 0.4;
  object-fit: cover;

`