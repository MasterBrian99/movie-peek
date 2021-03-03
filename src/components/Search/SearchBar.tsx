import { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import cogoToast from 'cogo-toast';
import { API_KEY } from '../../data/mainData';
const SearchBar = () => {

    const [searchValue, setsearchValue] = useState('');
    let history = useHistory();
    return (
        <div>
            <div className="d-flex flex-column">
                <Input type="search" className="form-control rounded" placeholder="Search Movies" aria-label="Search"
                    aria-describedby="search-addon" value={searchValue} onChange={e => setsearchValue(e.target.value)} />
                <Btn type="button" className="btn" onClick={async () => {

                    const res = await axios.get(`http://www.omdbapi.com/?t=${searchValue}&apikey=${API_KEY}`);
                    res.data.Response !== 'False' && res.data.Response !== undefined ? history.push(`/movie/name/${searchValue}`) : cogoToast.error('Movie Not Found');
                    // console.log(res.data.Response);
                    // res.data.data.movie.id   !== 0 ? history.push(`/movie/id/${id}`) : cogoToast.warn("Something wrong !");
                }}>search</Btn>
            </div>
        </div>
    )
}

export default SearchBar



const Input = styled.input`

    font-size:1.4rem;
    font-weight:700;

    @media (max-width:991px){
    margin-top:20rem;
    }
`
const Btn = styled.a`
    background-color: #E90101;
    width: 10rem;
    font-weight: 700;
    color:#fff;
    margin:1rem auto;

    &:hover{
        background-color: transparent;
        border: 1px solid #E90101;
        color: #fff;
    }

`