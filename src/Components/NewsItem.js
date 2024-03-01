// import React, { Component } from 'react';

const NewsItem =(props)=> {
    
        let { title, description, imageUrl, url, author, date, source } = props;

        return (
            <>
            <div className='my-3'>
                <div className="card" style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
                    <div>
                        <div style={{
                            display: "flex",
                            justifyContent: "flex-end",
                            position: "absolute",
                            right: "0",
                        }}>
                            <span className="badge rounded-pill bg-danger">{source}</span>
                        </div>
                        <img src={! imageUrl ? "https://static.toiimg.com/thumb/msid-104088796,imgsize-92708,width-400,resizemode-4/104088796.jpg":imageUrl} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}...</p>
                            <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                            <a href={url} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
            </>
        );
    }
export default NewsItem
