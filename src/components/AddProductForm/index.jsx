
import React from "react";
import { useState,useEffect } from "react";

export const AddProductForm = ({State,item,SaveList}) => {
    const [id,setId] = useState("")
    const [avatar,setAvatar] = useState("")
    const [name,setName] = useState("")
    const [content,setContent] = useState("")

    useEffect(() => {
        State({id:id,avatar:avatar,name:name,content:content})
    }, [avatar,name,content])


    // moi lan item thay doi thi gia tri input thay doi
        useEffect(()=>{
            if(item){
                setAvatar(item.avatar)
                setId(item.id)
                setContent(item.content)
                setName(item.name)
            }
        },[item])

    const Avatar = (e) =>{
        setAvatar(e.target.value)
    }
    const Name = (e) =>{
        setName(e.target.value)
    }
    const Content = (e) =>{
        setContent(e.target.value)
    }

    // khi an Save
    const Save =() =>{
        SaveList()
        setAvatar("")
        setName("")
        setId("")
        setContent("")
    }
   
  
    return <div>
        <div className="field-input-group">
            <input placeholder="Image" type="text" className="ant-input"  value = {avatar} onChange={Avatar} />
        </div>
        <div className="field-input-group">
            <input placeholder="Product name" type="text" className="ant-input" value = {name} onChange={Name} />
        </div>
        <div className="field-input-group">
            <input placeholder="Product description" type="text" className="ant-input" value = {content} onChange = {Content} />
        </div>
        <div className="modal-new-user-footer">
            <button className="ant-btn ant-btn-primary" onClick={Save}>
                Save
            </button>
            <button className="ant-btn" style={{marginLeft: 10}} >
                Cancel
            </button>
        </div>
    </div>
}
