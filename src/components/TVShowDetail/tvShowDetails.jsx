import style from "../TVShowDetail/style.module.css"
import { FiveStarRating } from "../FiveStarRating/FiveStarRating"

export function TvShowDetails({tvShow}){
    const rating = tvShow.vote_average /2;
    return <div>
        <div className={style.title}>{tvShow.name}</div>
        <div className={style.rating_container} >
            <FiveStarRating  rating = {rating}/>
            <span className={style.rating}> {rating} /5 </span>
        </div>
        <div className={style.overview}>{tvShow.overview}</div>
    </div>
}