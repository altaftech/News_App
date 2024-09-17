import React from 'react';

const NewsList = ({ title, description, imageUrl, newsUrl, author, date, source }) => {
    return (
        <div className="my-3">
            <div className="card">
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    position: 'absolute',
                    top: '5px',
                    right: '4px'
                }
                }>
                    <span className="badge rounded-pill bg-primary"> {source} </span>
                </div>
                <img src={!imageUrl ? "news.gif" : imageUrl} className="card-img-top" alt="News" />
                <div className="card-body">
                    <h5 className="card-title">{title}  </h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    );
};

export default NewsList;
