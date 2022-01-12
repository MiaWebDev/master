import React from "react";
import './NewsItem.css';
/*
function NewsItem(props) {
  return (
    <div className="col-sm-3">
      <div className="card mb-4 text-dark bg-info">
        <div className="card-body">
          <h2 className="card-title">{props.title}</h2>
          <p className="card-text">{props.de}</p>
        </div>
        <div className="card-footer">
          <span className="btn btn-sm btn-danger">O'chirish</span>
        </div>
      </div>
    </div>
  );
}*/
/*
function NewsItem({ title, de }) {
  return (
    <div className="col-sm-3">
      <div className="card mb-4 text-dark bg-info">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="card-text">{de}</p>
        </div>
        <div className="card-footer">
          <span className="btn btn-sm btn-danger">O'chirish</span>
        </div>
      </div>
    </div>
  );
}*/

class NewsItem extends React.Component {
  /*componentDidMount() {
    console.log('Yaratilgandan keyin');
  }

  componentWillMount() {
    console.log('Yaratishdan oldin');
  }*/

  render() {
    //console.log('Yaratidi');
    return (
      <div className="col-sm-3">
        <div className="card mb-4 text-dark bg-info">
          <div className="card-body">
            <h2 className="card-title">{this.props.newitem.title}</h2>
            <p className="card-text">{this.props.newitem.desc}</p>
          </div>
          <div className="card-footer">
            <span className="btn btn-sm btn-danger" onClick={this.props.onDelete}>O'chirish</span>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
