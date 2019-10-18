import React,{Component} from 'react';
import PropTypes from 'prop-types';

class Movie extends Component {
    render() {
        const {id, year, title, summary, poster} = this.props;
        return (
            <h4>{title}</h4>
        )
    }
}

Movie.PropTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

export default Movie;