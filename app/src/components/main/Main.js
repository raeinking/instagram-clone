import React from 'react';
import Header from '../header/Header'
import Story from '../story/Story.js'
import '../main/main.css'
import Post from '../post/Post.js';



function Main() {
  return (
    <div className='mainpage' >
        <Header />
        <Story />
        <Post />
        <Post />
        <Post />
        <Post />
    </div>
  )
}

export default Main