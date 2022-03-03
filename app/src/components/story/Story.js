import React from 'react'
import './story.css'
import styled from 'styled-components'

function story() {
  return (
    <div className='storyDiv'>
        <Avatar alt="Remy Sharp" src={require("../image/Instagram-logo-red.svg")} />
        <Avatar alt="Travis Howard" src={require("../image/Instagram-logo-red.svg")} />
        <Avatar alt="Cindy Baker" src={require("../image/Instagram-logo-red.svg")} />
    </div>
  )
}

export default story


const Avatar = styled.div `
  width: 50px;
  height: 50px;
  object-fit: contain;
`