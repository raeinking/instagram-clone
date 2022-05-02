import React , { useEffect , useState} from 'react';
import Header from '../header/Header'
import Story from '../story/Story.js'
import '../main/main.css'
import Post from '../post/Post.js';
import User from '../data/User.js'





function Main() {
  // const [Posts,setPosts]=useState([])
  // const pos = collection(db, 'posts')
  
  // useEffect( () => {
  //   const po = async () =>  {
  //     const data = await getDocs(pos)
  //     setPosts(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
  //   }

  //   po()
  // }, [])

  return (
    <div className='mainpage' >
        <Header />
        <Story />
        {/* <User /> */}
        {/* {Posts.map((doc) => {
          return (
            <Post key={doc.id} username={doc.username} caption={doc.caption} urlimg={doc.urlimg} />
          ) */}
        {/* } */}
        {/* ) */}
        {/* } */}
    </div>
  )
}

export default Main