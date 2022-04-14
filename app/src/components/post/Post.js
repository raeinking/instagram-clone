import React, { Component, useEffect , useState } from 'react';
// import axios from 'axios';
import styled from 'styled-components';
import '../post/Poststyle.css';
// import Stack from '@mui/material/Stack';
// import { deepOrange, deepPurple } from '@mui/material/colors';
import { deepmerge } from '@mui/utils';
import Avatar from '@mui/material/Avatar';
// import UserEverything from '../login/Login'
import { db } from '../data/firebase.js';


function Post() {
    const [Posts , setPosts] = useState([])
    
    useEffect(() => {
        db.collection('posts').onSnapshot( snapshot => {
            setPosts(snapshot.docs.map(doc => 
                console.log(doc.data())
            ))
        })
    }, [])

  return (
    <POST>
        {Posts.map( post => {
            console.log('asdf') 
        })}
        <hr />
        <div className="headerspost">
            <Avatar className='ava' sx={{ bgcolor: deepmerge[500] }} alt="Remy Sharp" src="/broken-image.jpg"></Avatar>
            <p className='pheder'>...</p>
        </div>
        <img className='rambo' src={require('../image/test.jpg')} />

        <div className="iconspost">
            <div className="lefticon">
                <img className='imgs' src={require('../image/heart.png')} />
                <img className='imgs' src={require('../image/chat-bubble.png')} />
                <img className='imgs' src={require('../image/send.png')} />
            </div>
            <div className="righticon"> <img className='imgs' src={require('../image/save-instagram.png')} /></div>
        </div>
        <div className="like">1000 likes</div>
        <div className="caption">caption</div>
        <div className="comments">
            user comments
        </div>
        <div className="commentstopost">
            <input className='comment' type="text"  placeholder='Add a comment' />
            {/* <input onClick={aspp} className='commentpost' type="button" value="Post" /> */}
        </div>
    </POST>
  )
}

export default Post


const POST = styled.div `
width: 90%;
max-width:600px;
border: 1px solid #dbdbdb;
position: relative;
display: flex;
flex-direction: column;
margin-top: 24px;
background-color: #fff;
`