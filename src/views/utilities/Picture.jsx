import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import {Card, CardActions,styled} from '@mui/material';
import PicItem from 'ui-component/PicItem';
import axios from 'axios';
import UploadPic from 'ui-component/uploadPic';

const PictureWrapper = styled("div")`
  display: flex;
  flex-wrap: wrap;
  .addPic{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 375px;
    margin-right: 15px;

  }
`

const Picture = memo((props) => {
  const [allPics,setAllPics] = useState([])

  const getAllPics = ()=>{
    axios.get("http://localhost:3000/api/pictures/allPic").then(res=>{
      // console.log(res.data.data)
      setAllPics(res.data.data)
    },err=>{
      console.log(err)
    })
  }
  useEffect(()=>{
    getAllPics()
  },[])


  return (
    <PictureWrapper>
      <div className="addPic">
      <Card sx={{minWidth: 275, minHeight: 375 }}>
        <CardActions>
          <UploadPic className="addOne"/>
        </CardActions>
      </Card>
      </div>
      {
         allPics?.map(item=>(
          <PicItem picurl={item.picurl} id={item._id} getAllPics={getAllPics}/>
        ))
      }
    </PictureWrapper>
  )
})

Picture.propTypes = {}

export default Picture