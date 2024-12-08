import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';

export class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 9,
    category: "business",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
      error: null
    };
  }

  async componentDidMount() {
    try {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1e000c49d1bc4f30a18f610b7b3bc900&page=1`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      
      // Check if articles exist and is an array
      if (parsedData.articles && Array.isArray(parsedData.articles)) {
        this.setState({ 
          articles: parsedData.articles, 
          totalResults: parsedData.totalResults || 0, 
          loading: false 
        });
      } else {
        this.setState({ 
          articles: [], 
          error: "No articles found", 
          loading: false 
        });
      }
    } catch (error) {
      this.setState({ 
        articles: [], 
        error: "Error fetching news", 
        loading: false 
      });
    }
  }

  handleNextClick = async () => {
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
      try {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1e000c49d1bc4f30a18f610b7b3bc900&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
          page: this.state.page + 1,
          articles: parsedData.articles || [],
          loading: false
        });
      } catch (error) {
        this.setState({ 
          loading: false, 
          error: "Error loading next page" 
        });
      }
    }
  }

  handlePrevClick = async () => {
    if (this.state.page <= 1) {
      return;
    }
    try {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=business&apiKey=1e000c49d1bc4f30a18f610b7b3bc900&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page - 1,
        articles: parsedData.articles || [],
        loading: false
      });
    } catch (error) {
      this.setState({ 
        loading: false, 
        error: "Error loading previous page" 
      });
    }
  }

  render() {
    // Add error handling
    if (this.state.error) {
      return <div className="container my-3 text-center">Error: {this.state.error}</div>;
    }

    return (
      <div className="container my-3">
        <h1 className="text-center" style={{ margin: "40px 35px" }}>NewsMonkey Top Headlines</h1>
        {this.state.loading && <Spinner />}
        {!this.state.loading && this.state.articles.length === 0 && (
          <div className="text-center">No articles found</div>
        )}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element, index) => {
              return (
                <div className="col-md-4" key={element.url + index}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              );
            })
          }
        </div>
        <div className="container d-flex justify-content-between">
          <button 
            disabled={this.state.page <= 1} 
            type="button" 
            className="btn btn-dark" 
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button 
            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} 
            type="button" 
            className="btn btn-dark" 
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;