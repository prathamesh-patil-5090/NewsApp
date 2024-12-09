import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [error, setError] = useState(null);

  const capitalizeFirstLetter = (val) => {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
  };

  const fetchMoreData = async () => {
      if (loading) return;
      props.setProgress(10);
      try {
        const nextPage = page + 1;
        
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${nextPage}&pageSize=${props.pageSize}`;
        
        setLoading(true);
        
        const response = await fetch(url);
        props.setProgress(30);
        const parsedData = await response.json();
        props.setProgress(70);
  
        if (parsedData.articles && Array.isArray(parsedData.articles)) {
          const newArticles = parsedData.articles.filter(
            newArticle => !articles.some(
              existingArticle => existingArticle.url === newArticle.url
            )
          );
  
          setArticles(prevArticles => [...prevArticles, ...newArticles]);
          setPage(nextPage);
          setTotalResults(parsedData.totalResults || totalResults);
          setLoading(false);
        } else {
          setLoading(false);
          setError("No more articles found");
        }
        props.setProgress(100);
      } catch (error) {
        setError("Error fetching more news");
        setLoading(false);
        props.setProgress(100);
      }
    };

  const fetchInitialNews = async () => {
    props.setProgress(10);
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`;
      
      setLoading(true);
      
      const response = await fetch(url);
      props.setProgress(30);
      const parsedData = await response.json();
      props.setProgress(70);

      if (parsedData.articles && Array.isArray(parsedData.articles)) {
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults || 0);
      } else {
        setError("No articles found");
      }
      
      setLoading(false);
      props.setProgress(100);
    } catch (error) {
      setError("Error fetching initial news");
      setLoading(false);
      props.setProgress(100);
    }
  };

  useEffect(() => {
    fetchInitialNews();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.country, props.category]);

  if (error) {
    return (
      <div className="container my-3 text-center">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="container my-3">
      <h1 className="text-center" style={{ margin: "40px 35px" , marginTop: "90px"}}>
        NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines
      </h1>
      
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element, index) => (
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
};

News.defaultProps = {
  country: "us",
  pageSize: 9,
  category: "business",
  apiKey: "YOUR_API_KEY", // Add a placeholder for API key
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  setProgress: PropTypes.func.isRequired,
  apiKey: PropTypes.string.isRequired,
};

export default News;