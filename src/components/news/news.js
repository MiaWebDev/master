import React, { Component } from "react";
import NewsItem from '../news-item/NewsItem';
import AddNews from '../add-news/add-news';

class News extends Component {
  state = {
    title: 'Yangiliklar: ',
    news: [
      { title: "Далеко-далеко за словесными горами, в стране гласных.", desc: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Коварных своего наш несколько оксмокс.' },
      { title: "Далеко-далеко, за словесными.", desc: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Коварных своего наш несколько оксмокс.' },
      { title: "Далеко-далеко за словесными горами.", desc: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Коварных своего наш несколько оксмокс.' },
      { title: "Далеко-далеко за словесными горами в стране гласных и согласных.", desc: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Коварных своего наш несколько оксмокс.' },
      { title: "Далеко-далеко за словесными горами в стране.", desc: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Коварных своего наш несколько оксмокс.' },
      { title: "Lorem ipsum dolor sit amet.", desc: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Коварных своего наш несколько оксмокс.' },
      { title: "Lorem ipsum dolor sit amet. 345345", desc: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Коварных своего наш несколько оксмокс.' },
      { title: "Далеко-далеко в стране гласных.", desc: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Коварных своего наш несколько оксмокс.' }
    ]
  };

  // funksiyani ishlatganda .bind(this) kontekst quyiladi
  handelUzgaruv(event) {
    //if (event.target.value.length > 3)
    this.setState({
      title: event.target.value
    });
  }

  handelDeleteNews = (index) => {
    let newNews = this.state.news.concat(); // kopiyasini olish uchun concat metodi chaqirildi 
    newNews.splice(index, 1); // Massivdan bitta element ochiradi

    this.setState({
      news: newNews
    });
  }

  AddNews = (item) => {
    let newNews = [item, ...this.state.news];

    this.setState({
      news: newNews
    });
  }

  render() {
    console.log(this.props);
    return (<div className="news mt-5">
      <div className="row">
        <h2>{this.state.title}</h2>
        <AddNews onQushish={this.AddNews} />
        <p>{this.state.news.length} ta</p>
        {this.state.news.map((item, index) => {
          return <NewsItem key={index} newitem={item} title={item.title} de={item.desc} onDelete={this.handelDeleteNews.bind(this, index)} />;
        })}
      </div>
    </div>);
  }
}

/*const News = () => (
  <div className="news mt-5">
    <div className="row">
      <h2>{title}</h2>
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
    </div>
  </div>
);*/


export default News;
