import "./Item.scss"
// import img3 from "../../img/YOVzKwa.jpeg";
import LazyLoad from 'react-lazyload';

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


const MovieItem = ({ id, url, imdb_code, title, year, runtime, genres, summary, yt_trailer_code, background_image_original, large_cover_image, date_uploaded }: Movies) => {
    return (
        <div className="blog-item__container">
            <div className="blog-item__inner">
                <div className="blog-item__image-container">
                    <LazyLoad>
                        <img src={background_image_original} alt={imdb_code} />

                    </LazyLoad>
                </div>
                <div className="blog-item__content">
                    <div className="blog-item__type-container">
                        {
                            genres?.length && genres.map((genre, index) => (
                                <div
                                    key={index.toString()}
                                    className="chip"

                                >
                                    <span> {genre} </span>
                                </div>
                            ))
                        }
                    </div>
                    <div className='d-flex '>
                        <span className="blog-item__date ">{date_uploaded}</span>
                        <span className="blog-item__runtime ml-2">{runtime} min</span>
                        <span className="blog-item__year ml-2">{year}</span>

                    </div>
                    <h2 className="blog-item__title">{title}</h2>
                    <p className="blog-item__text">
                        {summary}
                        <a href={url} className="blog-item__text__link">Read more..</a>
                    </p>

                </div>
            </div>
        </div>
    );
}

export default MovieItem;