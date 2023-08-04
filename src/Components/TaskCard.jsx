import React from 'react'
import styles from '../styles/TodoList.module.css'
import { Link } from 'react-router-dom'
import icon from '../gifs/del.gif'
import { useDispatch } from 'react-redux'
import { delTodo, toggleCard } from '../Redux/action'
import axios from 'axios'
const TaskCard = ({i,id,title,details,status,time}) => {
  const dispatch = useDispatch()
  const handleDel = () =>{
    const delAction = delTodo(id)
    dispatch(delAction)
    delTodoJson()
  }
  const handleToggle = () =>{
    const toggleAction = toggleCard(id)
    dispatch(toggleAction)
    patchTodo(status)
  }
  const patchTodo = async() =>{
    try{
      await axios.put(`${process.env.REACT_APP_BASE_SERVER_URL}/todo/${id}`,{
        title,
        details,
        'status':!status,
        time
      })
    }catch(error){
      console.log(error)
    }
  }
  const delTodoJson = async() =>{
    try{
      await axios.delete(`${process.env.REACT_APP_BASE_SERVER_URL}/todo/${id}`)
    }catch(error){
      console.log(error)
    }
  }
  return (
    <div className={styles.card}>
        <h2>{id}.</h2>
        <span>{title}</span>
        <Link to={`/todo/${i+1}`}>Details</Link>
        <button className={status?`${styles.status} ${styles.active}`:`${styles.status} ${styles.inactive}`} onClick={handleToggle}>{status?"Completed" : "Incomplete"}</button>
        <button onClick={handleDel}>
          <img src={icon} alt='delete' />
        </button>
    </div>
  )
}

export default TaskCard