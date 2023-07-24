import React, { useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import { ArticleContext } from '../context/ArticleContext'

const SingleArticle = () => {
  const {selectedArticle} = useContext(ArticleContext)
    const navigate = useNavigate()
  return (
    <div className='single-article-wrapper'>
    <div className='single-article-container'>
        <button onClick={() => navigate('/')}>go back</button>
        <h1 id='single-article-title'>{selectedArticle.title}</h1>
        <p id='single-article-author'>{selectedArticle.author}</p>
        <p id='single-article-news-outlet'>{selectedArticle.source.name}</p>
        <img src={selectedArticle.urlToImage} id='single-article-img'/>
        <p id='single-article-content'>{selectedArticle.content}</p>
        <p id='single-article-timestamp'>{selectedArticle.punlishedAt}</p>
    </div>
    </div>
  )
}

export default SingleArticle
