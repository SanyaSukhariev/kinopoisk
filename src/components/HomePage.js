import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';




const HomePage = () => {
    
    
    const [stateFilms, setStateFilms] = useState([]);
    const url = "https://api.themoviedb.org/3/trending/all/day?api_key=8d4e0a5a0c37d4780eefdf617d0feea1"

    // const url = "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits"

    // useEffect(() => {
    //     fetch(url)
    //     .then(response => response.json())
    //     .then(commits => setState((commits[0].author.login)));
    // },[url])

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(commits => setStateFilms(commits.results))
    },[])

    return (
        <div>
        <h3>HomePage</h3>
            <p> Info about HomePage</p>
            {stateFilms.filter(({ title }) => title).map(({ title, id }) => <Link to={`/movies/${id}`}><ul><li>{title}</li></ul></Link>)}
            
        </div>
    )
}
export default HomePage