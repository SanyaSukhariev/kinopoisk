import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';



const Reviews = () => {

    const { filmsId } = useParams();
    const [stateReviews, setStateReviews] = useState({results:[]})

    const url =`https://api.themoviedb.org/3/movie/${filmsId}/reviews?api_key=8d4e0a5a0c37d4780eefdf617d0feea1&language=en-US&page=1`

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((commits) => setStateReviews(commits))
    },[])
    return (
       
        <div>
          
            <h2>Reviews info</h2>
            <div>
            
                
                {stateReviews.results.length === 0 ? "We dont have any reviews for this movie" : stateReviews.results.map((allInfo) => 
                    <ul><li><strong>{"Author: " + allInfo.author}</strong><p>{allInfo.content}</p></li></ul>
                )}
                
            
            </div>
            
                
            
            </div>
    )

}
export default Reviews