/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
/* eslint-disable no-var */
/* eslint-disable no-plusplus */
/* eslint-disable react/no-unused-state */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import $ from 'jquery';
import Loading from './Loading';
import Output from './Output';
import Footer from './Footer';
import util from '../../../sensitive';
import getAllPageData from '../../../helpers/helpers';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: {
        Action: 28,
        Adventure: 12,
        Animation: 16,
        Comedy: 35,
        Crime: 80,
        Documentary: 99,
        Drama: 18,
        Family: 10751,
        Fantasy: 14,
        History: 36,
        Horror: 27,
        Music: 10402,
        Mystery: 9648,
        Romance: 10749,
        Science_Fiction: 878,
        TV_Movie: 10770,
        Thriller: 53,
        War: 10752,
        Western: 37,
      },
      movies: [],
      data: [],
      total_pages: 0,
      isLoading: '',
      view: 'form',
      reload: false,
    };
  }


  getAllPageData(genre, pageCount) {
    var allData = [];
    var count = 0;
    if (pageCount > 15) {
      count = 15;
    } else {
      count = pageCount;
    }
    for (let page = 1; page <= count; page++) {
      let path = '';
      if (genre !== undefined) {
        path = `https://api.themoviedb.org/3/discover/movie?api_key=${util.API_KEY}&include_adult=false&with_genres=${genre}&with_original_language=en&page=${page}`;
      }
      $.ajax({
        method: 'GET',
        url: path,
        success: (data) => {
          allData.push(data.results);
        },
        error: (err) => {
          console.log(err, 'Error');
        },
      });
      path = '';
    }
    this.setState({
      data: allData,
    });
    setTimeout(() => {
      this.setState({
        view: 'output',
        isLoading: false,
      });
    }, 2000);
  }


  setLoading(e) {
    e.preventDefault();
    this.setState({
      isLoading: true,
      reload: true,
    });
    this.handleSubmit(e);
  }

  changeReload(e) {
    this.setState({
      reload: e,
    });
  }

  handleSubmit(e) {
    const { genres } = this.state;
    const genreId = genres[e.target.genre.value];
    let path = '';
    if (e.target.genre.value !== undefined) {
      path = `https://api.themoviedb.org/3/discover/movie?api_key=${util.API_KEY}&include_adult=false&with_genres=${genreId}&with_original_language=en`;
    }
    $.ajax({
      method: 'GET',
      url: path,
      success: (data) => {
        const end = data.total_pages;
        this.getAllPageData(genreId, end);
      },
      error: (err) => {
        console.log(err, 'Error');
      },
    });
    this.setState({
      reload: false,
    });
  }

  form() {
    const genre = ['Action', 'Adventure', 'Animation', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Family', 'History', 'Horror', 'Music', 'Mystery', 'Romance', 'Science_Fiction', 'TV_Movie', 'Thriller', 'War', 'Western'];
    return (
      <form id="form" className="form bg-light rounded " onSubmit={this.setLoading.bind(this)}>
        <div className="form-group">
          <img src="https://i.imgur.com/a7WrQoe.png" alt="flick-finder-logo" width="200px" />
          <p>
            <b>To Find A Flick,</b>
            <br />
            <b>First:</b> select a <b>Genre</b>, <i>then select <b>Submit</b></i>
            <br />
            <i><b>Scroll below to see results, trailers, and more!</b></i>
          </p>
          <hr />
        </div>
        <div className="form-row">
          <div className="form-group col-sm">
            <select id="genre" className="form-control">
              <option>Choose Genre...</option>
              {genre.map((elem, i) => <option key={i}>{elem}</option>)}
            </select>
          </div>
        </div>
        <br />
        <div className="col-sm">
          <button className="btn btn-dark btn-lg text-light">Submit</button>
        </div>
        <br />
      </form>
    );
  }

  render() {
    const {
      isLoading, data, view, reload,
    } = this.state;
    if (isLoading) {
      return (
        <div>
          <Loading />
          <Footer />
        </div>
      );
    }
    if (view === 'output') {
      return (
        <div>
          {this.form()}
          <Output data={data} reload={reload} />
          <Footer />
        </div>
      );
    }
    if (reload === true) {
      return (
        <div>
          <Loading />
          <Footer />
        </div>
      );
    }
    return (
      <div>
        {this.form()}
        <Footer />
      </div>
    );
  }
}


export default Form;
