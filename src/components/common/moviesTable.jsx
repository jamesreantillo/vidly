import React from 'react';
import Like from './like';

const MoviesTable = (props) => {
  const {movies, onDelete, onLike, onSort} = props

  return ( <table className='table'>
            <thead>
              <tr>
                <th onClick={() => onSort()}>Title</th>
                <th onClick={() => onSort()}>Genre</th>
                <th onClick={() => onSort()}>Stock</th>
                <th onClick={() => onSort()}>Rate</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {movies.map((movie) => (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <Like
                      onLikeToggle={() => onLike(movie)}
                      liked={movie.liked}
                    />
                  </td>
                  <td>
                    <button
                      onClick={() => onDelete(movie)}
                      className='btn btn-danger btn-sm'
                    >
                      delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table> );
}
 
export default MoviesTable;