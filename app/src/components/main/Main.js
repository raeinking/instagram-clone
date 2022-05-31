import React , { useEffect , useState} from 'react';
import Header from '../header/Header'
import Story from '../story/Story.js'
import '../main/main.css'
import Post from '../post/Post.js';
import { collection , getDocs } from "firebase/firestore";
import db  from '../data/firebase';






function Main() {
  const [Posts,setPosts]=useState([])
  const pos = collection(db, 'posts')
  
  useEffect( () => {
    const po = async () =>  {
      const data = await getDocs(pos)
      setPosts(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
      console.log(Posts)
    }
    po()a
  }, [])

  return (
    <div className='mainpage' >
        <Header />
        <Story />
        {Posts.map((doc) => {
          return (
            <Post key={doc.id} username={doc.username} caption={doc.caption} urlimg={doc.urlimg} />
          )}
        )}
    </div>
  )
}

export default Main