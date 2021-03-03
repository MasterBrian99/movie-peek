import { useState, useEffect } from 'react';
import styled from 'styled-components';
import randomColor from 'randomcolor';
import { useHistory } from 'react-router-dom';
import { genres } from '../../data/mainData';
randomColor({
    luminosity: 'bright',
});

const BrowseItem = () => {

    const [random, setRandom] = useState('#fff');
    let history = useHistory();
    useEffect(() => {
        (function () {
            try {
                const s = randomColor();
                setRandom(s);
            } catch (e) {
                throw e;
            }
        })();
        return () => {
            setRandom('');
        }
    }, []);

    return (
        <>
            <Browse className='d-flex  flex-wrap' >
                {genres.map((g, index) =>
                    <Button key={index} className='btn btn-sm' style={{ backgroundColor: random }} onClick={() => {
                        history.push(`/browse/${g}`)
                    }}>{g}</Button>
                )}
            </Browse>
        </>
    )
}

export default BrowseItem



const Browse = styled.div`
   
    padding:1rem;
    border-radius:10px;

`

const Button = styled.button`
color:#000000;
padding:0.3rem .8rem;
font-size:1rem;
margin:.5rem;


    :hover{
    color:#ffffff; 
    background-color:#000000;
    border:0.4px solid #ffffff;

    }
`
