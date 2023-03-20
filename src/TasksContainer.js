import React from 'react';
import Counter from './Counter';
import SearchForm from './SearchForm';
import MoviesList from './GenreSelect';

class TasksContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: [
                {
                    id: 1,
                    title: 'Pulp Fiction',
                    type: 'Action & Adventure',
                    year: 1994,
                    selected: true
                },
                {
                    id: 2,
                    title: 'Bohemian Rhapsody',
                    type: 'Drama',
                    year: 2003
                },
                {
                    id: 3,
                    title: 'Kill Bill',
                    type: 'Oscar winning',
                    year: 1994
                },
                {
                    id: 4,
                    title: 'Avengers',
                    type: 'Action & Adventure',
                    year: 2004
                },
                {
                    id: 5,
                    title: 'Inception',
                    type: 'Action & Adventure',
                    year: 1994
                },
                {
                    id: 6,
                    title: 'Reservior Dogs',
                    type: 'Oscar winning',
                    year: 1994
                }
            ],
        }
        this.updateSelectedMovie = this.updateSelectedMovie.bind(this);
    }

    onSearchVal(val) {
        console.log(val);
    }

    updateSelectedMovie(id) {
        console.log(id);
        const movieList = this.state.movies.map(item => {
            if (item.title !== id) {
                item.selected = false;
                return item
            }
            else {
                item.selected = true;
                return item
            }
        });


        this.setState({
            movieList
        })
    }

    render() {
        return (
            <div className='container'>
                <Counter counterValue="0" />
                <SearchForm initialValue="0" onSearchValue={this.onSearchVal} />
                <div className='image-container d-flex justify-content-start m-3'>
                    {
                        this.state.movies.map(
                            (item) => <MoviesList key={Math.random()} {...item}
                                selectedMovieName={
                                    this.state.movies.filter(x => x.selected)[0]?.title
                                }
                                onMovieClick={this.updateSelectedMovie} />
                        )
                    }
                </div>
            </div>
        );
    }
}

export default TasksContainer;
