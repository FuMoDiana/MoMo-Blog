import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Button, styled } from '@mui/material';


const UploadWrapper = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto;
  .addIcon{
    font-size: 275px;
  }
`

function UploadPic() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUploadClick = async () => {
    const formData = new FormData();
    formData.append('image', selectedFile);
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjc4MDg3NDA1LCJleHAiOjE2ODA2Nzk0MDV9.sCdL36kU6OMmd1nCZ6cZUqC6QSaXBfqyhwn0K70OF7I"
    try {
      // 发送图片到后端
      const response = await fetch('http://localhost:3000/api/pictures/push', {
        method: 'POST',
        body: formData,
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <UploadWrapper>
      <input type="file" onChange={handleFileChange} style={{ display: 'none' }} />
      <AddIcon className='addIcon' onClick={() => document.querySelector('input[type=file]').click()} />
      <Button onClick={handleUploadClick}>上传图片</Button>
    </UploadWrapper>
  );
}

export default UploadPic;
