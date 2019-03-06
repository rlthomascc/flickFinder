/* eslint-disable react/prop-types */
/* eslint-disable no-plusplus */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-useless-constructor */
/* eslint-disable no-var */
import React, { Component } from 'react';
import Helpers from '../../../helpers/helpers';

class Output extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      movies: [],
      film1: [],
      film2: [],
      film3: [],
    };
  }

  componentWillMount() {
    const { data } = this.props;
    var flatData = [];
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].length; j++) {
        data[i][j].release_date = data[i][j].release_date.substring(0, 4);
        flatData.push(data[i][j]);
      }
    }
    this.setState({
      movies: flatData,
      isLoading: false,
      film1: Helpers.getRandomFilm(flatData),
      film2: Helpers.getRandomFilm(flatData),
      film3: Helpers.getRandomFilm(flatData),
    });
  }


  setMovie() {
    const { movies } = this.state;
    this.setState({
      film1: Helpers.getRandomFilm(movies),
      film2: Helpers.getRandomFilm(movies),
      film3: Helpers.getRandomFilm(movies),
    });
  }

  output() {
    const {
      film1, film2, film3,
    } = this.state;
    return (
      <div className="output">
        <div className="d-flex flex-column">


          <div className="p2">
            <div className="d-flex flex-row">
              <div className="p2">
                <img alt="poster" src={`https://image.tmdb.org/t/p/w300/${film1.poster_path}`} />
              </div>
              <div className="p2 col-sm-6">
                <a target="_blank" href={`https://www.youtube.com/results?search_query=${film1.title}%20trailer`}>
                  <p className="h4 text-danger"><b>{`${film1.title} (${film1.release_date})`}</b></p>
                </a>
                <br />
                <p className="h6 text-warning"><b>Rating: </b></p>
                <p className={`h6 ${film1.vote_average > 5.5 ? 'text-success' : 'text-danger'}`}><b>{film1.vote_average}</b></p>
                <br />
                <div className="d-flex align-content-end flex-wrap">
                  <p className="text-light">{film1.overview}</p>
                </div>
                <br />
                <br />
                <div className="d-flex flex-row">
                  <a target="_blank" href={`https://www.imdb.com/find?ref_=nv_sr_fn&q=${film1.title}&s=all`}>
                    <input className="btn btn-sm btn-success" type="button" value="More Information" />
                  </a>
                  <a target="_blank" href={`https://www.youtube.com/results?search_query=${film1.title}%20trailer`}>
                    <input className="btn btn-sm btn-success" type="button" value="Watch Trailer" />
                  </a>
                  <a target="_blank" href={`https://www.justwatch.com/us/search?q=${film1.title}`}>
                    <input className="btn btn-sm btn-success" type="button" value="Where Is It Streaming?" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <hr />
          <br />
          <br />


          <div className="p2">
            <div className="d-flex flex-row">
              <div className="p2">
                <img alt="poster" src={`https://image.tmdb.org/t/p/w300/${film2.poster_path}`} />
              </div>
              <div className="p2 col-sm-6">
                <a target="_blank" href={`https://www.youtube.com/results?search_query=${film2.title}%20trailer`}>
                  <p className="h4 text-danger"><b>{`${film2.title} (${film2.release_date})`}</b></p>
                </a>
                <br />
                <p className="h6 text-warning"><b>Rating: </b></p>
                <p className={`h6 ${film2.vote_average > 5.5 ? 'text-success' : 'text-danger'}`}><b>{film2.vote_average}</b></p>
                <br />
                <p className="text-light">{film2.overview}</p>
                <br />
                <br />
                <div className="d-flex flex-row">
                  <a target="_blank" href={`https://www.imdb.com/find?ref_=nv_sr_fn&q=${film2.title}&s=all`}>
                    <input className="btn btn-sm btn-success" type="button" value="More Information" />
                  </a>
                  <a target="_blank" href={`https://www.youtube.com/results?search_query=${film2.title}%20trailer`}>
                    <input className="btn btn-sm btn-success" type="button" value="Watch Trailer" />
                  </a>
                  <a target="_blank" href={`https://www.justwatch.com/us/search?q=${film2.title}`}>
                    <input className="btn btn-sm btn-success" type="button" value="Where Is It Streaming?" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <hr />
          <br />
          <br />


          <div className="p2">
            <div className="d-flex flex-row">
              <div className="p2">
                <img alt="poster" src={`https://image.tmdb.org/t/p/w300/${film3.poster_path}`} />
              </div>
              <div className="p2 col-sm-6">
                <a target="_blank" href={`https://www.youtube.com/results?search_query=${film3.title}%20trailer`}>
                  <p className="h4 text-danger"><b>{`${film3.title} (${film3.release_date})`}</b></p>
                </a>
                <br />
                <p className="h6 text-warning"><b>Rating: </b></p>
                <p className={`h6 ${film3.vote_average > 5.5 ? 'text-success' : 'text-danger'}`}><b>{film3.vote_average}</b></p>
                <br />
                <p className="text-light">{film3.overview}</p>
                <br />
                <br />
                <div className="d-flex flex-row">
                  <a target="_blank" href={`https://www.imdb.com/find?ref_=nv_sr_fn&q=${film3.title}&s=all`}>
                    <input className="btn btn-sm btn-success" type="button" value="More Information" />
                  </a>
                  <a target="_blank" href={`https://www.youtube.com/results?search_query=${film3.title}%20trailer`}>
                    <input className="btn btn-sm btn-success" type="button" value="Watch Trailer" />
                  </a>
                  <a target="_blank" href={`https://www.justwatch.com/us/search?q=${film3.title}`}>
                    <input className="btn btn-sm btn-success" type="button" value="Where Is It Streaming?" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <hr />
        <br />
        <br />

        <div className="d-flex justify-content-center">
          <button type="button" className="btn btn-warning btn-lg" onClick={this.setMovie.bind(this)}>Find New Flicks</button>
        </div>
        <br />
        <br />
        <div className="d-flex justify-content-center">
          <p className="text-secondary">Thank you for using & supporting this service!</p>
        </div>
        <br />
        <br />
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.output()}
      </div>
    );
  }
}

export default Output;
