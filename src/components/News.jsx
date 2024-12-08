import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=93fc855b86734ad5beef889a00218714&page=1`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false });
}
handleNextClick = async () => {
  if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / 9))) {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=93fc855b86734ad5beef889a00218714&page=${this.state.page + 1}&pageSize=9`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page + 1 ,
      articles: parsedData.articles,
      loading: false
    });
  }
}
handlePrevClick = async () => {
  if (this.state.page <= 1) {
    return;
  }
  let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=93fc855b86734ad5beef889a00218714&page=${this.state.page - 1}&pageSize=9`;
  this.setState({ loading: true });
  let data = await fetch(url);
  let parsedData = await data.json();
  this.setState({
    page: this.state.page - 1,
    articles: parsedData.articles,
    loading: false
  });
}
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">NewsMonkey Top Headlines</h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title : ""}
                  description={
                    element.description ? element.description : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container">
          <div className="d-flex justify-content-between">
            <button disabled={this.state.page === 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>
              &larr; Previous
            </button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 9)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>
              Next &rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
