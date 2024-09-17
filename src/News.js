import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsList from './NewsList';
import load from './loading.gif'


const News = ({ country, category }) => {
    const [news, setNews] = useState([]);

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    useEffect(() => {
      document.title = `${capitalizeFirstLetter(category)} - News`

        axios.get(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=9ee7494e0f5c4c1a83c60499e0083747`)
        // axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=9ee7494e0f5c4c1a83c60499e0083747`)
        // axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=396183dbb9904a29b235d8be8d8dfbaf`)
        // axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=c3ba725e55004e089c522ead9574b959`)
            .then(response => setNews(response.data.articles))
            .catch(error => console.error('Error fetching news:', error))

    }, [])
    return (
        <>
            <h3 className="text-center">Top {capitalizeFirstLetter(category)} Headlines</h3>
            {news.length === 0 ? (
                <>
                    {/* <p className='text-center'>No news available.</p> */}
                    <p className='text-center' style={{ position: "fixed", top: "50%", left: "50%" }}><img src={load} alt="img" /></p>
                </>
            ) : (
                <div className="container">
                    <div className="row">
                        {news.map((value, index) => {
                            return <div className="col-md-4" key={index}>
                                <NewsList title={value.title} description={value.description} imageUrl={value.urlToImage} newsUrl={value.url} author={value.author} date={value.publishedAt} source={value.source.name} />
                            </div>
                        })}
                    </div>
                </div>
            )}
        </>
    )
}

export default News
