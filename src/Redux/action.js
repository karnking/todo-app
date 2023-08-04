import { ADD_TODO, DEL_TODO, TOGGLE_TODO } from "./actionTypes"
export const addTodo = (payload) =>{
    return {
        type:ADD_TODO,
        payload
    }
}
export const delTodo = (payload) =>{
    return {
        type:DEL_TODO,
        payload
    }
}
export const toggleCard = (payload) =>{
    return {
        type: TOGGLE_TODO,
        payload
    }
}