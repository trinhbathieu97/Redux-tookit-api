import React, {useState} from 'react';
import { Modal } from 'antd';

import {ListProduct} from './components/ListProduct'
import {AddProductForm} from './components/AddProductForm'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { AddTodo,SuaTodo,DeleteTodo } from './components/store/Reduce';

import 'antd/dist/antd.css'
import './App.css';

function App() {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [state,setState] = useState({id:"", name:"", content:"" ,avatar:""})
    const [item,Setitem] = useState(null)
   
    const dispatch = useDispatch()

    const handleOpenModal = () => {
        setIsModalVisible(true)
    }

    const handleCancel = () => {
        setIsModalVisible(false)
    }

    // khi an edit
    const EditTodo = (list) =>{
        handleOpenModal()
        Setitem(list)
    }

    // khi an vao save
    const SaveList = () =>{
        switch(state.id){
            case "":
                Add()
                break
                default:
             Upate()
        }
    }

    // post api them 
    const Add = () =>{
        dispatch(AddTodo(state))
        handleCancel()
    }

    const Upate = () =>{
        dispatch(SuaTodo(state))
        handleCancel()
    }

    // ==== delete
    const Delete =(id)=>{
        dispatch(DeleteTodo(id))
    }

    return (
        <div className="App">
            <h2>List product</h2>
            <div className="header-add-user">
                <button className="ant-btn ant-btn-primary" onClick={handleOpenModal}>
                    Add New Product
                </button>
            </div>
            <ListProduct
             EditTodo = {EditTodo}
             Delete = {Delete}
             />
            <Modal title="Add Product" visible={isModalVisible} footer={null} onCancel={handleCancel}>
                <AddProductForm 
                State = {setState}
               item = {item}
               SaveList = {SaveList}
                />
            </Modal>
        </div>
    );
}

export default App;
