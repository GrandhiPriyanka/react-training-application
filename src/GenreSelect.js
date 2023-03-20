import React, { Component } from "react";


class MoviesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieList: this.props.moviesArrayList
        }
    }

    render() {
        const {
            onMovieClick,
            selectedMovieName,
            title,
            year,
            id,
            type
        } = this.props;
        return (
            <div className="movieContainer" onClick={() => onMovieClick(title)}>
                <img src={title + ".svg"} alt={title} />
                <div className={selectedMovieName === title ? 'highlightClass' : 'deHighlightClass'}>
                    <span>{title} </span>
                    <span>{year}</span>
                    <div>{type}</div>
                </div>
            </div>
        );
    }
}
export default MoviesList;