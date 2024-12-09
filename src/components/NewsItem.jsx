import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, date, author, source } = this.props;

    // Handle potentially undefined or null values
    const safeAuthor = author || "Unknown Author";
    const safeSource = source || "Unknown Source";
    const safeTitle = title || "No Title Available";
    const safeDescription = description || "No description available.";

    return (
      <div className="my-3">
        <div className="card h-100 shadow-sm">
          <div className="position-relative">
            <img
              src={
                imageUrl
                  ? imageUrl
                  : "https://bitcoinmagazine.com/.image/ar_1.91,c_fill,cs_srgb,fl_progressive,g_faces:center,q_auto:good,w_1200/MjExMjM0MDk2OTMwNjI5MzA5/why-trump-must-end-capital-gains-taxes-on-bitcoin.jpg"
              }
              className="card-img-top"
              alt="News Article"
            />
            <span
              className="position-absolute top-0 end-0 badge rounded-pill bg-danger"
              style={{ zIndex: 1, margin: "10px" }}
            >
              {safeSource}
            </span>
          </div>

          <div className="card-body d-flex flex-column">
            <h5 className="card-title">{safeTitle}</h5>

            <p className="card-text flex-grow-1">{safeDescription}</p>

            <div className="d-flex justify-content-between align-items-center mt-3">
              <small className="text-muted">
                <span className="me-2">
                  <i className="bi bi-person-fill"></i> {safeAuthor}
                </span>
                <span>
                  <i className="bi bi-calendar-fill"></i>{" "}
                  {new Date(date).toLocaleDateString()}
                </span>
              </small>

              <a
                href={newsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm btn-outline-dark"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
