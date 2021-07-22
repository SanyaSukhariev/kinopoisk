import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import classes from "../components/Cast.module.css"





const Cast = () => {


    const { filmsId } = useParams()
    const url = `https://api.themoviedb.org/3/movie/${filmsId}/credits?api_key=8d4e0a5a0c37d4780eefdf617d0feea1&language=en-US`
    const [stateCast, setStateCast] = useState({cast:[]})
    
    const imgUrl = "https://image.tmdb.org/t/p/w500";

    
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((commits)=>setStateCast(commits))
    },[])

    return (
        <div>
          
        
             <h2>Cast info</h2>
            {stateCast.cast.filter(({profile_path})=>profile_path).map((imgCast) =>
                <li><img className={classes.img} src={imgUrl + imgCast.profile_path} />
                    <ul><li>{imgCast.name}</li></ul>
                    <ul><li>{ "Character: " + imgCast.character}</li></ul>
                </li>)}
  
       
           
            </div>
          )
    
}
export default Cast