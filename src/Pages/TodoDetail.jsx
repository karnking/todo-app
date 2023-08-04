import React from 'react'
import styles from '../styles/TodoDetails.module.css'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
const TodoDetail = () => {
  const {i} = useParams()
  const {id,title,details,status,time} = useSelector(state=>state.tasks[i-1])
  return (
    <div className={styles.detail}>
      <h2>Task no. {id}</h2>
      <h2> {title}</h2>
      <p>{details}</p>
      <div>
        <h3>Created at : {new Date(time).toLocaleTimeString()}</h3>
        <h3 style={status ? {background:'linear-gradient(to bottom right,white,green)'} : {background:'linear-gradient(to bottom right,black,red)',color:"white"}}>{status ? "Completed" : "Not Completed"}</h3>
      </div>
    </div>
  )
}

export default TodoDetail