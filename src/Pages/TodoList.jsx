import React, { useEffect, useState } from 'react'
import Loading from '../Components/Loading'
import axios from 'axios'
import styles from '../styles/TodoList.module.css'
import TaskCard from '../Components/TaskCard'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../Redux/action'
const TodoList = () => {
  const [loading,setLoading] = useState(false)
  const tasks = useSelector(state=>state.tasks)
  const dispatch = useDispatch()
  const handleShow = (data) =>{
    const addTodoAction = addTodo(data)
    dispatch(addTodoAction)
  }
  const getTodo = async() =>{
    setLoading(true)
    try{
      let response = await axios.get(`${process.env.REACT_APP_BASE_SERVER_URL}/todo`)
      handleShow(response.data)
      setLoading(false)
    }catch(e){
      console.log(e)
      setLoading(false)
    }
  }
  useEffect(()=>{
    getTodo()
  },[])
  if(loading) return <Loading />
  return (
    <div className={styles.todoList}>
      {
        tasks?.map((task,i)=>{
          return <TaskCard key={i} i={i} {...task} />
        })
      }
    </div>
  )
}

export default TodoList