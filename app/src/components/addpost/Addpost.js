import React, {useEffect , useState} from 'react'
import styled from 'styled-components'
import './addpost.css'
import { getAuth , onAuthStateChanged} from "firebase/auth";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {getDocs ,  serverTimestamp , orderBy , query , addDoc , doc, onSnapshot ,collection, getFirestore , where} from 'firebase/firestore';
import db from '../data/firebase';





function Addpost() {
    const [Image , setImage] = useState('')
    const [Caption , setCaption] = useState('asdgsadg')
    const [username, setUsername] = useState('')
    const auth = getAuth();

    





    const storage = getStorage();

    // Create the file metadata
    /** @type {any} */
    const metadata = {
      contentType: 'image/jpeg'
    };
    
    // Upload file and metadata to the object 'images/mountains.jpg'
    const storageRef = ref(storage, 'images/' + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);
    
    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on('state_changed',
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      })

a



























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