import { useEffect, useState } from "react";
import { TVShowAPI } from "./api/tv-show";
import style from "./style.module.css";
import {BACKDROP_BASE_URL} from "./config"
import { TvShowDetails } from "./components/TVShowDetail/tvShowDetails";
import logoImg from "./assets/images/logo.png"
import {Logo} from "./components/Logo/Logo"
import { TVShowListItem } from "./components/TvShowListItem/TVShowListItem";

export function App(){

    const [currentTVShow, setcurrentTVShow] = useState();
    const [recommendationList, setRecommendationList] = useState([]);

    async function fetchPopulars(){
        const popularTVShowList = await TVShowAPI.fetchPopular();
        if (popularTVShowList.length >0){
            setcurrentTVShow(popularTVShowList[0]);
        }
    }

    async function fetchRecommendations(tvShowId){
        const recommendationListResp = await TVShowAPI.fetchRecommendations(tvShowId);
        if (recommendationListResp.length >0){
            setRecommendationList(recommendationListResp.slice(0,10));
        }
    }

    useEffect( () => {
        // (async () => {
        //     const popularTVShowList = await TVShowAPI.fetchPopular();
        // }) ();
        fetchPopulars();
    }, []);

    useEffect( () => {
        if(currentTVShow){
            fetchRecommendations(currentTVShow.id)
        }
    }, [currentTVShow]);



console.log(recommendationList)
    return (
        
        <div className={style.main_container} 
        style ={{background: currentTVShow ? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}"), no-repeat center / cover` : "black"}}
        >
        
            <div className={style.header}>
                <div className="row">
                    <div className="col-4">
                        <Logo img = {logoImg} title = "Watowatch" subtitle = "Find a show you may like" />
                        
                    </div>
                    <div className="col-md-12 col-lg-4">
                        <input  style={{width:"100%"}} type="text" />
                    </div>
                </div>
            </div>
            <div className={style.tv_show_detail}> {currentTVShow && <TvShowDetails tvShow = {currentTVShow}/> }
            </div>
            <div className={style.recommended_tv_show}>
            {currentTVShow && <TVShowListItem tvShow = {currentTVShow} onClick={ (tvShow) => {
                console.log("clicked", tvShow)
            }}/>}
            </div>
            
        </div>
    );
    
}