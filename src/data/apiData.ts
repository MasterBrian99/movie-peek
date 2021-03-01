import axios from 'axios';

export const getData=async(length:number)=>{
    const res=await axios.get(`https://yts.mx/api/v2/list_movies.json?&limit=${length}`);
        const data=res.data.data;
    // console.log(data);
    
    return data;

}

// interface ImgProps {
//     url: string
// }
// export const getImg=async () =>{
//     const res=await axios.get('https://loremflickr.com/g/320/240/paris,girl/all');

//     console.log(res);
//     return res+'';
// }