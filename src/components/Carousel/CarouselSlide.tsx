import { useState, useEffect } from 'react'
import { Carousel, } from 'react-bootstrap';
import axios from 'axios';
import styled from 'styled-components';
import img1 from '../../img/yXFqtlQ.jpeg'
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
  /*
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
  
    }, [])
  */
  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect} keyboard slide touch wrap pause={false}>


        <Carousel.Item>
          <img

            src={img1}
            alt="First slide"
          />
          <Carousel.Caption>
            <CaptionDiv >
              <h4>New releases</h4>
              <h2>Lorem ipsu mipsumi psumips.</h2>
              <CaptioninfoDiv className='mr-auto'>
                <p className='mr-3'>2020</p>
                <p className='mr-1'>Genre</p>
                <p className='mr-1'>Genre</p>
                <p className='mr-1'>Genre</p>
                <p className='mr-1'>Genre</p>
                <p className='ml-3'>96 min</p>
              </CaptioninfoDiv>
              <CaptionInfoMain >
                <p>ody, a 9-year-old boy from Mugwomp Flats responds to a distress call about a trapped giant
                Golden Eagle called Marahute. Freeing her, he gains a close friendship with the bird. However,
                   Cody is soon abducted by the murderous poacher</p>
                <a href="#" className='btn btn-danger btn-lg'>Watch Trailer</a>
              </CaptionInfoMain>
            </CaptionDiv>

          </Carousel.Caption>

        </Carousel.Item>


      </Carousel>
    </>
  )
}
export default CarouselSlide

// export const getStaticProps: GetStaticProps = async () => {
//     const res = await axios.get(`https://yts.mx/api/v2/movie_suggestions.json?movie_id=${Math.floor(Math.random() * 10)}`);
//     const data = await res.data;
//     const movies = await data.data.movies;
//     return {
//         props: {
//             movies
//         }
//     }
// }

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
`