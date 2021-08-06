import { useParams,useHistory } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import {Link,Route,Switch } from 'react-router-dom'
import Cast from "./Cast";
import Reviews from "./Reviews";
import Button from '@material-ui/core/Button';
import Movies from "./Movies";
import axios from "axios";


const AboutPage = () => {
    
    const { filmsId } = useParams()
    const  history  = useHistory()
    const axios = require('axios')

    
    const [stateInfoFilms, setStateInfoFilms] = useState({genres:[]})
    
    const url = `https://api.themoviedb.org/3/movie/${filmsId}?api_key=8d4e0a5a0c37d4780eefdf617d0feea1&language=en-US`
    
    const imgUrl = "https://image.tmdb.org/t/p/w500" + stateInfoFilms.backdrop_path;

    
    // useEffect(() => {
    //     fetch(url)
    //         .then(response => response.json())
    //         .then(commits => setStateInfoFilms(commits))
    // }, [])
    
     useEffect(() => {
        axios.get(url)
            .then(response => {
                const commit = response.data
                setStateInfoFilms(commit)
            })
    }, [])
    
    const goBackClick=() => {
        history.goBack()
    }

    return (
        
        
        <div>
            <Button variant="contained" color="primary" onClick={ goBackClick}>go back</Button>
            
                <div>
                <img src={imgUrl}/>
                </div>
            
            <div>
                { stateInfoFilms.overview}
            </div>
            
           
                <div>
                {stateInfoFilms.genres.map((value, index) => {
                return index === stateInfoFilms.genres.length - 1 ? value.name: value.name + ","
                })}
                </div>
                <hr/>
          
            <div>
             {/* <h3>AboutPage</h3>
                <p> Info about AboutPage</p> */}
            </div>
            <p>Additional information</p>

                <section>

                    <nav>
                        <ul>
                            <li><Link to={`/movies/${filmsId}/cast`}>Cast</Link></li>
                            <li><Link to={`/movies/${filmsId}/reviews`}>Reviews</Link></li>
                        </ul>
                    </nav>
                <hr/>
                    <Switch>
                    <Route path='/movies/:filmsId/cast' component={Cast} />
                    <Route path='/movies/:filmsId/reviews' component={Reviews} />
               
                    </Switch>

                </section>
                
          
        
        </div>
    )
}
export default AboutPage