import React from 'react'
import './blog.css';
import { Article } from '../../components';
import {} from './import'
const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">Do you want to step in to the future before others.</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container__groupA">
           <Article />
        </div>

        <div className="gpt3__blog-container__groupB"></div>
           <Article />
           <Article />
           <Article />
           <Article />
      </div>
    </div>
  )
}

export default Blog