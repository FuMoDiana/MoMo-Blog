import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import DataTable from 'ui-component/DataTable';
import { memo, useEffect, useState } from 'react';
import DocSearchBar from 'ui-component/DocSearchBar';
import axios from 'axios';
import { useLocation } from 'react-router';


const DocSearch = memo((props) => {
  
  const location = useLocation()
  const {pathname} = location
  const searchFn = pathname.split("/")[3]
  const searchText = pathname.split("/")[4]
  const url = `http://localhost:3000/api/articles/${searchFn}/search?keyword=${searchText}`

  const getAlldocs = (fn) => {
    axios.get(url).then(res=>{
      fn(res.data.data)
    },err=>{
      console.log(err)
    })
  }

  return (
    <MainCard title="文章列表" secondary={<SecondaryAction link="https://next.material-ui.com/system/typography/" />}>
      <DocSearchBar />
      <DataTable searchText={searchText} getAlldocs={getAlldocs}/>
    </MainCard>
  )
})

DocSearch.propTypes = {}

export default DocSearch