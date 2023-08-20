import React, { useState } from 'react'
import styles from '../styles/AddToDo.module.css'
import Loading from '../Components/Loading'
import axios from 'axios'
const iniState = {title:"",details:""}
const AddTodo = () => {
  const [formData,setFormData] = useState(iniState)
  const [loading,setLoading] = useState(false)
  const uploadTodo = async() =>{
    setLoading(true)
    try{
      await axios.post(`${process.env.REACT_APP_BASE_SERVER_URL}/todos`,{
        ...formData,
        status:false,
        time: Date.now()
      })
      setLoading(false)
    }catch(error){
      console.log(error)
      setLoading(false)
    }
    setFormData(iniState)
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    uploadTodo()
  }
  const handleChange = (e) =>{
    if(e.target.name === 'title' && (e.target.value).length>25) return; 
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  // console.log(formData)
  if(loading) return <Loading />
  return (
    <div className={styles.addTodo}>
      <form onSubmit={handleSubmit}>
        <label>Task <input type='text' placeholder='Enter task' name='title' value={formData.title} onChange={handleChange}/></label>
        <label>Details <textarea placeholder='Enter more details' name='details' value={formData.details} onChange={handleChange}></textarea></label>
        <button>Add the task</button>
      </form>
    </div>
  )
}

export default AddTodo
