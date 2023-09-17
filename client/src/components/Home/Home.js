import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Home = () => {
    const navigate=useNavigate();
    useEffect(() => {
    const token =localStorage.getItem('Token')
    if(!token)
    {
        navigate('/')
    }
      
    }, [])
    
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand">Home</a>
    <form className="d-flex">
   
        <i className="bi bi-person-circle px-2"><span className='px-2'>{localStorage.getItem('Name')}</span></i>
      <button className="btn btn-outline-success" type="submit" onClick={()=>{
        localStorage.clear(); navigate('/')
      }}>Logout</button>
    </form>
  </div>
</nav>
<h1 className='dispaly-1'>Welcome</h1>
    </div>
  )
}

export default Home
