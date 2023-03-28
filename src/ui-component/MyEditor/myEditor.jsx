import "vditor/dist/index.css";
import React from "react";
import Vditor from "vditor";
import { useEffect } from "react";
import { useState } from "react";
import { MyEditorWrapper } from "./style";
import { memo } from "react";
import { debounce } from "lodash";
import { useCallback } from "react";



const MyEditor = memo((props) => {
  const [vd, setVd] = useState("");
  const {setContent} = props

  const InputOnchange = (value)=>{
    setContent(value)
  }

  const vditorInputOnchange = useCallback(debounce(e=>InputOnchange(e.target.innerText),1500),[])

  
  useEffect(()=>{
    const {content} = props
    const vditor = new Vditor("vditor", {
      "minHeight": 400,
      after: () => {
        vditor.setValue(content);
        setVd(vditor);
      }
    });
  },[])

  return( 
  <MyEditorWrapper>
    <div id="vditor" onInput={vditorInputOnchange} className="vditor" />
  </MyEditorWrapper>
  
  )
})

export default MyEditor;
