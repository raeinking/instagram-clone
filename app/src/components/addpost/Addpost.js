import React from 'react'
import styled from 'styled-components'
import './addpost.css'
import { getAuth , onAuthStateChanged} from "firebase/auth";


function Addpost() {
    const auth = getAuth()
    const upload = (e) => {
        e.preventDefault()
        auth.onAuthStateChanged((authUser) => {
            console.log(authUser);
        })
    }

  return (
    <Add>
        <main>
            <label htmlFor="file">File</label>
            <input type="file" name="" id="" />
            <label htmlFor="caption">Caption</label>
            <input type="text" placeholder='write hear...'/>
            <button onClick={upload} className='btn log'>Upload</button>
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