import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsList from './NewsList';
import load from './loading.gif'


const News = ({ category }) => {
    const [news, setNews] = useState([]);

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    useEffect(() => {
      document.title = `${capitalizeFirstLetter(category)} - News`
        axios.get(`https://saurav.tech/NewsAPI/top-headlines/category/${category}/in.json`)
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
                            return <div className="col-md-3" key={index}>
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
