import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { PicItemWrapper } from './style'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, maxHeight } from '@mui/system';
import { Avatar, CardHeader, CardMedia, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';



const PicItem = memo((props) => {
  const {picurl,id,getAllPics} = props

  //删除图片
  const deleteButtonClick = () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjc4MDg3NDA1LCJleHAiOjE2ODA2Nzk0MDV9.sCdL36kU6OMmd1nCZ6cZUqC6QSaXBfqyhwn0K70OF7I"
    axios.delete(`http://localhost:3000/api/pictures/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then(res=>{
      alert("删除成功")
      getAllPics()
    },err=>{
      alert("删除失败！请重试！")
    })
  }
  return (
    <PicItemWrapper>
      <Card sx={{ minWidth: 275, minHeight: 375}}>
      <CardHeader
        action={
          <IconButton onClick={deleteButtonClick} aria-label="settings">
            <CloseIcon />
          </IconButton>
        }
      />
        <CardContent>
          <CardMedia
            component="img"
            height="200"
            width="100%"
            src={picurl}
            alt="Paella dish"
          />
        </CardContent>
      </Card>
    </PicItemWrapper>
  )
})

PicItem.propTypes = {}

export default PicItem