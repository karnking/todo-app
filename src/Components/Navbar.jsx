import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import styles from '../styles/Navbar.module.css'
const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/todo">All Todo</NavLink>
        <NavLink to="/addTodo">Add Todo</NavLink>
    </div>
  )
}

export default Navbar