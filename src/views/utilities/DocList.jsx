// project imports
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import DataTable from 'ui-component/DataTable';
import { memo, useEffect, useState } from 'react';
import DocSearchBar from 'ui-component/DocSearchBar';
import axios from 'axios';


// ==============================|| TYPOGRAPHY ||============================== //

//请求数据
const getAlldocs = (setListFn)=>{
  axios.get("http://localhost:3000/api/articles/allDocs").then(res=>{
      setListFn(res.data.content)
    },err=>{
      console.log(err)
    })
}

const DocList =memo(() => {

    return(
        <MainCard title="文章列表" secondary={<SecondaryAction link="https://next.material-ui.com/system/typography/" />}>
            <DocSearchBar />
            <DataTable getAlldocs={getAlldocs}/>
        </MainCard>
    )
})

export default DocList;
