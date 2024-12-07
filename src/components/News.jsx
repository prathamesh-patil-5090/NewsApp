import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

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

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
      error: null,
    };
    document.title = `NewsMonkey - ${this.capitalizeFirstLetter(
      this.props.category
    )}`;
  }

  capitalizeFirstLetter = (val) => {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
  };

  fetchMoreData = async () => {
    try {
      const nextPage = this.state.page + 1;
      
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1e000c49d1bc4f30a18f610b7b3bc900&page=${nextPage}&pageSize=${this.props.pageSize}`;
      
      // Prevent multiple simultaneous fetches
      if (this.state.loading) return;

      this.setState({ loading: true });
      
      let data = await fetch(url);
      let parsedData = await data.json();

      // Check if articles exist and is an array
      if (parsedData.articles && Array.isArray(parsedData.articles)) {
        // Filter out duplicate articles
        const newArticles = parsedData.articles.filter(
          newArticle => !this.state.articles.some(
            existingArticle => existingArticle.url === newArticle.url
          )
        );

        this.setState(prevState => ({
          articles: [...prevState.articles, ...newArticles],
          page: nextPage,
          totalResults: parsedData.totalResults || prevState.totalResults,
          loading: false,
        }));
      } else {
        this.setState({
          loading: false,
          error: "No more articles found",
        });
      }
    } catch (error) {
      this.setState({
        loading: false,
        error: "Error fetching more news",
      });
    }
  };

  async componentDidMount() {
    await this.fetchInitialNews();
  }

  fetchInitialNews = async () => {
    try {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1e000c49d1bc4f30a18f610b7b3bc900&page=1&pageSize=${this.props.pageSize}`;
      
      this.setState({ loading: true });
      
      let data = await fetch(url);
      let parsedData = await data.json();

      if (parsedData.articles && Array.isArray(parsedData.articles)) {
        this.setState({
          articles: parsedData.articles,
          totalResults: parsedData.totalResults || 0,
          loading: false,
        });
      } else {
        this.setState({
          articles: [],
          error: "No articles found",
          loading: false,
        });
      }
    } catch (error) {
      this.setState({
        articles: [],
        error: "Error fetching initial news",
        loading: false,
      });
    }
  };

  render() {
    // Error handling
    if (this.state.error) {
      return (
        <div className="container my-3 text-center">
          Error: {this.state.error}
        </div>
      );
    }

    return (
      <div className="container my-3">
        <h1 className="text-center" style={{ margin: "40px 35px" }}>
          NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)}{" "}
          Headlines
        </h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length < this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
          <div className="row">
            {this.state.articles.map((element, index) => (
              <div className="col-md-4" key={`${element.url}-${index}`}>
                <NewsItem
                  title={element.title || ""}
                  description={element.description || ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author || "Unknown"}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            ))}
          </div>
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}

export default News;