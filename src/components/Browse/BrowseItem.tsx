
import styled from 'styled-components';
import img1 from '../../img/Zlw9mQm.png'

interface Prop {
    genre: string
}


const BrowseItem = ({ genre }: Prop) => {




    return (
        <>
            <Browse className='d-flex flex-column justify-content-between' >
                <img src={img1} alt="" />
                <h2>{genre}</h2>

            </Browse>
        </>
    )
}

export default BrowseItem



const Browse = styled.div`
    height:20rem;
    width:14rem;
    background-color:#000000;
    margin:1rem;
    border-radius:10px;

    img{
        width:100%;
        height:100%;
        object-fit:cover;
    border-radius:10px;
        opacity:.5;
    border-radius:10px;

    }

    h2{
font-family: 'Noto Sans', sans-serif;
        font-weight:700;
        color:white;
        font-size:1.2rem;
        background-color:#333333;
        text-align: center;
        padding:1rem;
        margin:0;
    border-radius:0 0  10px 10px;

    }

`