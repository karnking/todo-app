import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../Pages/Home'
import TodoDetail from '../Pages/TodoDetail'
import Error from '../Components/Error'
import TodoList from '../Pages/TodoList'
import AddTodo from '../Pages/AddTodo'

const AllRoutes = () => {
  return <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/todo' element={<TodoList />} />
    <Route path='/todo/:i' element={<TodoDetail />} />
    <Route path='/addTodo' element={<AddTodo />} />
    <Route path='*' element={<Error />} />
  </Routes>
}

export default AllRoutes