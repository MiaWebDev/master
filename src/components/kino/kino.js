import React from "react";
import Load from "./../load/load";

const MaxPage = 12;

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

  pagination = (page) => {
    if (page === 'prev') {
      page = this.state.page - 1;
    }

    if (page === 'next') {
      page = this.state.page + 1;
    }

    this.setState({
      page,
    });

    this.getKino(this.state.page);
  };

  pagesBtn() {
    return Array(MaxPage).fill().map((v, i) => {
      return <li key={i+1} className={'page-item' + (this.state.page === i+1 ? ' active' : '')}><button className="page-link" onClick={this.pagination.bind(this, i+1)}>{i+1}</button></li>; 
    });
  }

  getKino(page) {
    try {
      fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=9b3f406f83b247debc4209ab4acbcede&language=ru-RU&page=' + page)
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
  }

  componentDidMount() {
    this.getKino(this.state.page);
  }

  render() {
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
      <div className="d-flex justify-content-center">
        <nav>
          <ul className="pagination">
            <li className={'page-item' + (this.state.page <= 1 ? ' disabled' : '')}>
              <button className="page-link" onClick={this.pagination.bind(this, 'prev')}>
                <span>&laquo;</span>
              </button>
            </li>
            {this.pagesBtn.call(this)}
            <li className={'page-item' + (this.state.page >= MaxPage ? ' disabled' : '')}>
              <button className="page-link" onClick={this.pagination.bind(this, 'next')}>
                <span>&raquo;</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div >
    )
    }
    </div>;
  }
}
