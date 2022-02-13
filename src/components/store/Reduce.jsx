import { createAsyncThunk,createSlice, isRejected } from "@reduxjs/toolkit";

import axios from "axios";

export const GetTodo = createAsyncThunk('todo/api', async () =>{
    const res = await axios.get('https://5d36d86c86300e0014b647c7.mockapi.io/products')
    return res.data
})

export const AddTodo = createAsyncThunk("todo/post",async (id) =>{
    const res = await axios.post('https://5d36d86c86300e0014b647c7.mockapi.io/products',id)
    return res.data
})

export const SuaTodo = createAsyncThunk("todo/put", async (id)=>{
    const res = await axios.put(`https://5d36d86c86300e0014b647c7.mockapi.io/products/${id.id}`,id)
  
    return res.data
})
export const DeleteTodo = createAsyncThunk("todo/delete", async (id)=>{
    const res = await axios.delete(`https://5d36d86c86300e0014b647c7.mockapi.io/products/${id}`)
   
    return res.data
})

const TodoSlice = createSlice({
    name:'Todo',
    initialState:{
        allTodo:[
            
        ]
    },
    reducers:{
        
    },
    extraReducers:{
        [GetTodo.fulfilled]:(state,action) =>{
            console.log('Done')
            state.allTodo = action.payload
        },
       
        [AddTodo.fulfilled]:(state,action) =>{
            state.allTodo = [...state.allTodo,action.payload]
            
        },
        [SuaTodo.fulfilled]:(state,action) =>{
            // cach su dung findIndex
            const oldItem = state.allTodo.findIndex(o => o.id === action.payload.id);
            state.allTodo[oldItem] = action.payload;
          

            // cach su dung ham map
            // state.allTodo = state.allTodo.map(x =>{
            //     if(x.id === action.payload.id){
            //         x.name = action.payload.name
            //     }
            //     return x
            // })
           
        },
        [DeleteTodo.fulfilled]:(state,action)=>{
       state.allTodo =  state.allTodo.filter(x => x.id !== action.payload.id)
        }
       
    }

})



const TodoReduce = TodoSlice.reducer
// ==== todos lay tu store
export const todoSelector = state => state.todos.allTodo

// export const {} = TodoSlice.actions

export default TodoReduce