import React, {Component} from 'react';
import axios from 'axios';
import Movie from './src/components/Movies';

class App extends Component {
    state = {
        isLoading: true,
        movies: [

        ]
    };

    getMovies = async() => {
        const {
            data: {
                data : {movies}
            }
        } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
        this.setState({movies: movies, isLoading: false})
    };
    componentDidMount() {
        this.getMovies();
    };

    render(){
        const { isLoading, movies } = this.state;
        return(
            <>
                {isLoading ? "Loading..." : movies.map(movie => {
                    console.log(movie);
                    return <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image}/>
                })}
            </>
        );
    };
};

export default App;
