import React from "react";
import Load from "./../load/load";

export default class Kino extends React.Component {
  /*constructor(props) {
    super(props);

    this.state = {
      films: []
    };
  }*/

  state = {
    films: [],
    page: 1,
    isLoading: true
  };

  onsdfjhkds = () => {
    this.setState({
      page: this.state.page + 1,
    });
  }

  render() {
    try {
      fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=9b3f406f83b247debc4209ab4acbcede&language=ru-RU&page=' + this.state.page)
        .then(response => response.json())
        .then(json => {
          this.setState({
            films: json.results,
            isLoading: false
          });
        });
    } catch (e) {
      console.log(e);
    }

    return <div className="my-4"> {this.state.isLoading ? <Load /> : (<div className="row g-4">
      {this.state.films.map(f => {
        return (
          <div className="col" key={f.id}>
            <div className="card" style={{ width: '18rem' }}>
              <img src={'https://image.tmdb.org/t/p/w500' + f.poster_path} className="card-img-top" alt={f.title} style={{ border: '1px solid rgb(255 2 2)' }} />
              <div className="card-body">
                <h5 className="card-title">{f.title}</h5>
                <p className="card-text">{(f.overview.length > 100) ? f.overview.substr(0, 100 - 1) + '...' : f.overview}</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">{f.release_date}</small>
              </div>
            </div>
          </div>
        );
      })}
      <button className="btn" onClick={this.onsdfjhkds}>Keyingi</button>
    </div>
    )
    }
    </div>;
  }
}