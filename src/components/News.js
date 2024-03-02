import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    

    const updateNews = async() =>{
        props.setProgress(15);
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=e1e32830b1c64a8d94036e5f438ca1e3&page=1&${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        let parsedData = await data.json();
        props.setProgress(50);
        setArticles(parsedData.articles);
        setLoading(false);
        setTotalResults(parsedData.totalResults);
        props.setProgress(100);
    }
    
    useEffect(() => {
        updateNews();
    }, [])

    const handlePrevClick = async() => {
        props.setProgress(15);
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=e1e32830b1c64a8d94036e5f438ca1e3&page=${page - 1}&${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        let parsedData = await data.json();
        props.setProgress(50);
        setPage(page-1);
        setArticles(parsedData.articles);
        setLoading(false);
        props.setProgress(100);

    }
    const handleNextClick = async() => {
        if(page + 1 > Math.ceil(totalResults/20)){

        }
        else{
        props.setProgress(15);
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=e1e32830b1c64a8d94036e5f438ca1e3&page=${page + 1}&${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        let parsedData = await data.json();
        props.setProgress(50);
        setPage(page+1);
        setArticles(parsedData.articles);
        setLoading(false);
        props.setProgress(100);
    }

    }
    return (
      <div className="container my-3">
        <h2 style={{textAlign:"center", marginTop:"100px"}}>Mani Kanth's  - Top Headlines News</h2>
        {loading && <Spinner/>}
        <div className="row">
        {!loading && articles.map((element)=>{
            return <div className="col-md-3" key={element.url}>
            <NewsItem title = {element.title?element.title.slice(0, 20):""} description= {element.description?element.description.slice(0, 50):""}
            imageUrl = {element.urlToImage}
            newsId ={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
            </div>
        })}  
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={page<=1} type="button" className="btn btn-dark" onClick={handlePrevClick}>&larr; Previous</button>
        <button disabled={page + 1 > Math.ceil(totalResults/props.pageSize)} type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
}

export default News
