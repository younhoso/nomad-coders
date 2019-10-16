import React, {Component} from 'react';
import axios from 'axios';

class App extends Component {
    state = {
        isLoading: true,
        movies: [

        ]
    };

    getMovies = async() => {
        const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
        console.log(movies);
    };
    componentDidMount() {
        this.getMovies();
    };

    render(){
        const { isLoading } = this.state;
        return(
            <>
                {isLoading ? "Loading..." : "We are ready"}
            </>
        );
    };
};

export default App;
