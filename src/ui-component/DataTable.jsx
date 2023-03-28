import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { styled } from "@mui/material";
import { Button, Grid, Link } from '@mui/material';
import { useNavigate } from 'react-router';

const columns = [
  { field: 'id', headerName: 'AID', width: 300 },
  { field: 'title', headerName: '文章标题', width: 200 },
  { field: 'birthTime', headerName: '创建时间', width: 150 },
  { field: 'tags', headerName: '标签', width: 150 }
];


const DocListWrapper = styled("div")`
  .button{
    margin-left: 10px;
    margin-top: 10px;
  }
`

const deleteArticle = (aid)=>{
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjc4MDg3NDA1LCJleHAiOjE2ODA2Nzk0MDV9.sCdL36kU6OMmd1nCZ6cZUqC6QSaXBfqyhwn0K70OF7I"

  //请求删除接口
  axios.delete(`http://localhost:3000/api/articles/article/${aid}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
  
}

const DataTable = memo( (props)=> {
  const [allDocs,setAllDocs] = useState([])
  const [selectedRows, setSelectedRows] = useState([]);
  const navigate = useNavigate()
  const {getAlldocs} = props
  const handleRowSelectionModelChange = (selectionModel) => {
    setSelectedRows(selectionModel);
    // console.log(selectionModel); // 打印选中的行ID数组
  };

  const handleDeleteButtonClick = () =>{
    for(let item of selectedRows){
      deleteArticle(item)
    }
    //自动刷新页面
    getAlldocs(setAllDocs)

  }
  
  //获取数据
  useEffect(()=>{
    const {getAlldocs} = props
      getAlldocs(setAllDocs)
      // console.log(allDocs)
  },[props.searchText])

  //双击行元素
  const RowDoubleClick = (params)=>{
    // console.log(params.row.id)
    navigate(`/utils/util-docchange/${params.row.id}`)
  }

    const data = allDocs.map((item)=>{
      item = {
        id:item._id,
        title:item.title,
        birthTime:item.birthTime,
        tags:item.tags
      }
      return item
    })
    // console.log(data)
    return (
      <DocListWrapper>
      <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        onRowSelectionModelChange={handleRowSelectionModelChange}
        onRowDoubleClick={RowDoubleClick}
      />
      </div>
      <div className="button">
        <Button onClick={handleDeleteButtonClick} variant="contained" color='secondary'>删除选中文章</Button>
      </div>
      </DocListWrapper>
      );
    }
)

export default DataTable