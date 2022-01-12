import React from "react";

export default class AddNews extends React.Component {

  state = {
    title: '',
    desc: ''
  }

  handlerAddNews = (e) => {
    e.preventDefault();

    // 1-variant 
    //const data = new FormData(e.target);
    //console.log(data);

    // 2-variant
    console.log(this.state);
    this.props.onQushish(this.state);
    this.setState({
      title: '',
      desc: ''
    });
  }

  hTitle = (e) => {
    //console.log(e.target.value);
    this.setState({
      title: e.target.value
    });
  }

  hDesc = (e) => {
    this.setState({
      desc: e.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handlerAddNews}>
        <div className="col-4">
          <input type="text" className="form-control mb-3" name="title" value={this.state.title} onChange={this.hTitle} />
        </div>
        <div className="col-6">
          <textarea name="desc" className="form-control mb-3" row="4" value={this.state.desc} onChange={this.hDesc} />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success">Yangilik qushish</button>
        </div>
      </form>
    );
  }
}