import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { DocSreachWrapper } from './style'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { Button } from '@mui/material';
import { GridSearchIcon } from '@mui/x-data-grid';
import { useNavigate } from 'react-router';

const currencies = [
  {
    value: 'title',
    label: '标题',
  },
  {
    value: 'tags',
    label: '标签',
  },
  {
    value: 'aid',
    label: 'aid',
  }
];
const DocSearchBar = memo((props) => {
  const [currency,setCurrency] = useState("title")
  const [search,setSearch] = useState("")
  const navigate = useNavigate()

  const handleChange = (event) => {
    setCurrency(event.target.value)
  }
  
  const searchTextChange = (event)=>{
    setSearch(event.target.value)
  }

  const searchButtonClick = () => {
    // console.log(`/utils/util-docsearch/${currency}/${search}`)
    navigate(`/utils/util-docsearch/${currency}/${search}`)
    
  }

  return (
    <DocSreachWrapper>
      <div className="searchItems">
        <TextField
            className="item"
            select
            label="搜索选项"
            value={currency}
            onChange={handleChange}
            helperText="请选择你要搜索的方式"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField 
            className='item'
            id="outlined-search" 
            label={currency}
            value={search}
            onChange={searchTextChange} 
            type="search" 
          />
          <Button
            className="button" 
            onClick={e=>searchButtonClick()}
            startIcon={<GridSearchIcon />} 
            variant="contained" 
            color='secondary'
          >
            搜索
          </Button>
      </div>
    </DocSreachWrapper>
  )
})

DocSearchBar.propTypes = {}

export default DocSearchBar