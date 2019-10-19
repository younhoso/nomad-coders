import React,{Component} from 'react';
import PropTypes from 'prop-types';
import "./Movies.scss";

class Movie extends Component {
    render() {
        const {id, year, title, summary, poster, genres} = this.props;
        return (
            <div className="movie">
                <img src={poster} alt={title} title={title}/>
                <div className="movie__data">
                    <h3 className="movie__title">{title}</h3>
                    <h5 className="movie__year">{year}</h5>
                    <ul className="genres">{genres.map((genre, id) => 
                        <li key={id} className="genres__genre">{genre}</li>)}
                    </ul>
                    <p className="movie__summary">{summary.slice(0, 180)}...</p>
                </div>
            </div>
        )
    }
}

Movie.PropTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;