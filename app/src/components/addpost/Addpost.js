import React, {useEffect , useState} from 'react'
import styled from 'styled-components'
import './addpost.css'
import { getAuth , onAuthStateChanged} from "firebase/auth";
import { getStorage , uploadBytesResumable, ref,  getDownloadURL } from "firebase/storage";
import {getDocs ,  serverTimestamp , orderBy , query , addDoc , doc, onSnapshot ,collection, getFirestore , where} from 'firebase/firestore';
import db from '../data/firebase';







function Addpost() {
    const [Image , setImage] = useState(null)
    const [Caption , setCaption] = useState('asdgsadg')
    const [username, setUsername] = useState('')
    const auth = getAuth();

   





    const storage = getStorage();
    const storageRef = ref(storage, `image/${setImage}`);
    
    // 'file' comes from the Blob or File API
    uploadBytesResumable(storageRef, `image/${setImage}`).then((snapshot) => {
      console.log('Uploaded a blob or file!');
    });


















    useEffect( () => {
        const po = async () =>  {
          const data = await getDocs(q)
          console.log(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }
        po()
    }, [])

    useEffect(() => {
        auth.onAuthStateChanged((authuser) => {
          if (authuser) {
            setUsername(authuser.displayName);
          } else {
            window.open('http://localhost:3000/login')
          }
        })
      }, [])
    const handleChange = (event) => {
        setImage(event.target.files[0])
        console.log(Image)
    }

    const colRef = collection(db, 'posts')
    const q = query(colRef, orderBy('createdAt'))
    const handleUpload = (e) => {
        e.preventDefault()

        addDoc(colRef , {
            username: username,
            caption: Caption,
            createdAt: serverTimestamp()
        })
        

    }

  return (
    <Add>
        <main>
            <label htmlFor="file">File</label>
            <input onChange={handleChange} type="file" name="" id="" />
            <label htmlFor="caption">Caption</label>
            <input className='input' type="text" placeholder='write hear...'/>
            <button onClick={handleUpload} className='btn log'>Upload</button>
        </main>
    </Add>
  )
}

export default Addpost


const Add = styled.div`
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`