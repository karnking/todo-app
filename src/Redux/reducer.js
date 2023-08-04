import { ADD_TODO, DEL_TODO, TOGGLE_TODO } from "./actionTypes"

const initState = {
    tasks: []
}
export const reducer = (state=initState,{type,payload}) =>{
    switch(type){
        case ADD_TODO: return {'tasks':[...payload]}
        case TOGGLE_TODO: return {'tasks':[...state.tasks.map((ele)=>{
            return ele.id===payload ? {...ele,'status':!ele.status} : ele
        })]}
        case DEL_TODO: return {'tasks':[...state.tasks.filter((ele)=>ele.id!==payload)]}
        default: return state
    }
}