import React from 'react'

const NewsItem = (props) => {
   
    // let {title, description, imageUrl, newsId, author, date, source} = props;
    return (
      <div className='my-3'>
        <div className="card">
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{left:'0%', zIndex:'5'}}>{props.source}</span>
        <img src={props.imageUrl?props.imageUrl:"https://watcher.guru/news/wp-content/uploads/2024/02/cryptocurrency-bitcoin-money-dollars-1024x585.jpg.webp"} 
        className="card-img-top" alt="..."/>
        <div className="card-body">  
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <small className="text-body-secondary mx-3">By {props.author?props.author:"Unknown"} on {new Date(props.date).toGMTString()}</small>
            <a href={props.newsId} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
        </div>
        </div>
      </div>
    )
  
}

export default NewsItem
