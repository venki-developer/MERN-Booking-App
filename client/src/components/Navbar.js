import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../resources/navbar.css'
import { message } from 'antd';
import { useDispatch } from 'react-redux';
import { HideLoading, ShowLoading } from '../redux/alertsSlice';

const Navbar = () => {
    const dispatch = useDispatch();
    const user = localStorage.getItem('token');
    const navigate = useNavigate();
    const handleSignout = ()=>{
      dispatch(ShowLoading());
        localStorage.removeItem('token');
        message.success({content:"Signed out successfully"});
        dispatch(HideLoading());
        navigate('/login');
    }
  return (
    <div className='layout-parent'>
        <nav>
      <h1><a className='nav-bar-anchor text-decoration-none' href="/">Rail App</a></h1>
      {user&&<button type='submit' onClick={handleSignout}>Sign Out</button>}
      </nav>
    </div>
  )
}

export default Navbar