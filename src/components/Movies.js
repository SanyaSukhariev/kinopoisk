import React, { useState} from 'react';
import { useEffect } from 'react';
import { useHistory,useLocation } from "react-router-dom";
import { Link, Route, Switch } from 'react-router-dom'
import axios from 'axios';


const Movies = () => {
    
    const [stateAddMovies, setStateAddMovies] = useState(``)
    const [stateSearchMovies, setStateSearchMovies] = useState([])
    // const url = `https://api.themoviedb.org/3/search/movie?query=${stateAddMovies}&api_key=8d4e0a5a0c37d4780eefdf617d0feea1&language=en-US&page=1&include_adult=false`
    const history = useHistory()

    const search = useLocation();
    const params = new URLSearchParams(search);
    const queryParam = params.get('query');

    const axios = require('axios')
 

    
    
    const searchFilms = (value) => {
        // fetch(`https://api.themoviedb.org/3/search/movie?query=${value}&api_key=8d4e0a5a0c37d4780eefdf617d0feea1&language=en-US&page=1&include_adult=false`)
        //     .then((response) => response.json())
        //     .then((commits) => setStateSearchMovies(commits.results))
        //     .catch(error => console.error(error));

        axios.get(`https://api.themoviedb.org/3/search/movie?query=${value}&api_key=8d4e0a5a0c37d4780eefdf617d0feea1&language=en-US&page=1&include_adult=false`)
            .then((response) => {
                history.push({ search: `query=${stateAddMovies}` })
                const commit  = response.data
                setStateSearchMovies(commit.results)
            })
        .catch(error => console.log(error.response));
       
      
    }

    
       useEffect(() => {
           if (queryParam)
           {
               searchFilms(queryParam)
           } else {
               console.log("test")
            }
       }, [])
    
    
    
    return (
        <div>
            <h2>MoviesPage</h2>
            { console.log("query = ",queryParam)}
            {/* <input onChange={(e)=>{setStateAddMovies(e.target.value)}} type="text" />
            <button disabled={stateAddMovies.length?false:true}  onClick={()=>searchFilms(stateAddMovies)}> Search</button> */}
            
            <form onSubmit={(e)=>searchFilms(stateAddMovies,e.preventDefault())} >
                <input onChange={(e)=>{setStateAddMovies(e.target.value)}} type="text" />
                <button type="submit" > Search</button>
            </form>

            <div>
                {console.log(stateAddMovies)}
                { console.log(stateSearchMovies)}
            {stateSearchMovies.map(({ original_title, id }) => <Link exact to={`/movies/${id}`}><ul><li>{original_title}</li></ul></Link>)}
            </div>

        </div>
    )
}
export default Movies