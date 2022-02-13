import './ListProduct.css'
import { useSelector } from 'react-redux'
import { todoSelector } from '../store/Reduce'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { GetTodo } from '../store/Reduce'

export const ListProduct = ( {EditTodo,Delete}) => {
    const list  = useSelector(todoSelector)
    console.log(list)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetTodo())
    
    }, [])

    const Edit = (item) =>{
        EditTodo(item)
    }

    const Remove = (id) =>{
        Delete(id)
    }


    return <div className="ant-list-items">
        <div className="ant-list-item">
            {
                list.map(item => <div className="ant-list-item-meta" key = {item.id}>
                <div className="ant-list-item-meta-avatar">
                    <span className="ant-image-img">
                        <img src={item.avatar} style={{width: 100}}/>
                    </span>
                </div>
                <div className="ant-list-item-meta-content">
                    <h4 className="ant-list-item-meta-title">
                        <a>{item.name}</a>
                    </h4>
                    <div className="ant-list-item-meta-description">
                       {item.content}
                    </div>
                </div>
                <ul className="ant-list-item-action">
                    <li onClick={()=>Edit(item)}>
                        <a>Edit</a>
                    </li>
                    <li onClick={()=>Remove(item.id)}>
                        <a>Remove</a>
                    </li>
                </ul>
            </div>)
            }
        </div>
    </div>
}