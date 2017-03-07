import React from 'react'
import { map,pathOr } from 'ramda'

class Posters extends React.Component {

  render() {
    const poster = (movie) => (
      <img key={movie.imdbID} src={movie.Poster} alt={movie.Name}/>
    )

    return (
      <div className="pa2 center">
          {map(poster, this.props.movies)}
      </div>
    )
  }
}

export default Posters
