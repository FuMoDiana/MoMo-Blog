import { Button, Grid, Link, TextField } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { memo } from 'react';
import { styled } from "@mui/material";
import { useState } from 'react';
import axios from 'axios';
import qs from "qs"
import MyEditor from 'ui-component/MyEditor/myEditor';

// ==============================|| TYPOGRAPHY ||============================== //

const DocPushWrapper = styled("div")`
    .title{
        display: flex;
        padding: 15px;
        /* justify-content: space-around; */
        .doctitle{
            min-width: 400px;
        }
        .titleTags{
            margin-left: 30px;
            min-width: 300px;
        }
        .submit{
            margin-left: 30px;
            margin-top: 5px;
        }
    }   
`
const createBirthTime= () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1; // 返回值从0开始计数，因此需要加1
    const day = now.getDate();

    const formattedDate = `${year}年${month}月${day}日`;
    return formattedDate; // 例如：2023年03月15日
}

const DocPush =memo((props) => {
    const [titleValue, setTitleValue] = useState('');
    const [tagsValue,setTagsValue] = useState('');
    const [content,setContent] = useState("")
    const submitClick = (e)=>{
        const data = {
            title:titleValue,
            content:content,
            birthTime:createBirthTime()
        }
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjc4MDg3NDA1LCJleHAiOjE2ODA2Nzk0MDV9.sCdL36kU6OMmd1nCZ6cZUqC6QSaXBfqyhwn0K70OF7I"
        axios.post("http://localhost:3000/api/articles/push",qs.stringify(data),{
            headers: {
              'Authorization': `Bearer ${token}`
            }
          }).then(res=>{
            console.log(res.data)
            alert("上传成功")
            setTitleValue("")
            setContent("")
          },err=>{
            console.log(err)
            alert("上传失败")
          })
    }
    return(
    <DocPushWrapper>
    <MainCard title="文章上传" secondary={<SecondaryAction link="https://next.material-ui.com/system/typography/" />}>
        <div className="title">
            <div className="doctitle">
                <TextField fullWidth label="文章标题" value={titleValue} color="secondary" onChange={(event) => setTitleValue(event.target.value)} focused />
            </div>
            <div className="titleTags">
                <TextField fullWidth label="文章标签" value={tagsValue} onChange={(event) => setTagsValue(event.target.value)} color="secondary" focused />
            </div>
            <div className="submit">
                <Button variant="contained"  onClick={e=>submitClick(e)} color="secondary">上传文章</Button>
            </div>
        </div>
        <MyEditor content={content} setContent={setContent}/>
    </MainCard>
    </DocPushWrapper>
    )
})

export default DocPush;
