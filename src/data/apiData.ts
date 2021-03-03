import axios from 'axios';
import {API_KEY} from './mainData';
export const getData=async(length:number)=>{
    const res=await axios.get(`https://yts.mx/api/v2/list_movies.json?&limit=${length}`);
        const data=res.data.data;
    // console.log(data);
    
    return data;

}





export const getDataByGenre= async(length:number,genre:string)=>{
    const res=await axios.get(`https://yts.mx/api/v2/list_movies.json?genre=${genre}&sort_by=year&limit=${length}`);
    const data=res.data.data;
    // console.log(data);
    return data;
}   


export const getSingleMovieData=async (id:string) => {
    const res=await axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
    const data=res.data.data.movie;
//   console.log(data);
  return data;

}


export const getOMDbData =async(name:string)=>{
    const res = await axios.get(`https://www.omdbapi.com/?t=${name}&apikey=${API_KEY}`);
    return res.data;
}