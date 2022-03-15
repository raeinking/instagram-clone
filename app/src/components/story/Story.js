import React from 'react'
import './story.css'
import styled from 'styled-components'
import Avatar from '@mui/material/Avatar';
import { deepmerge } from '@mui/utils';

function story() {
  return (
    <div className='storyDiv'>
        <Avatar className='ava' sx={{ bgcolor: deepmerge[500] }} alt="Remy Sharp" src={require("../image/Instagram-logo-black.svg")}></Avatar>
        <Avatar className='ava' sx={{ bgcolor: deepmerge[500] }} alt="Remy Sharp" src="/broken-image.jpg"></Avatar>
        <Avatar className='ava' sx={{ bgcolor: deepmerge[500] }} alt="Remy Sharp" src="/broken-image.jpg"></Avatar>
        <Avatar className='ava' sx={{ bgcolor: deepmerge[500] }} alt="Remy Sharp" src="/broken-image.jpg"></Avatar>
      </div>
  )
}

export default story


