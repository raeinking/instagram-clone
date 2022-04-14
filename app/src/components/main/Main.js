import React from 'react';
import Header from '../header/Header'
import Story from '../story/Story.js'
import '../main/main.css'
import Post from '../post/Post.js';
import User from '../data/User.js'



function Main() {
  return (
    <div className='mainpage' >
        <Header />
        <Story />
        {/* <User /> */}
        <Post />
    </div>
  )
}

export default Main