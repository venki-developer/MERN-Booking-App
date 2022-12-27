import React from 'react'
import { Form, message} from 'antd';
import '../resources/global.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { HideLoading, ShowLoading } from '../redux/alertsSlice';
import Navbar from '../components/Navbar';
const Login = () => {

  const [form] = Form.useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinish = async(values)=>{
    try{
      dispatch(ShowLoading());
      const response = await axios.post('http://localhost:8000/api/users/login',values);
      // console.log(response.data)
      dispatch(HideLoading());
      if(response.data.success) {
        message.success(response.data.message);
        localStorage.setItem("token", response.data.data);
        navigate('/login');
      }else{
        message.error(response.data.message);
      }
    }catch(error){
      dispatch(HideLoading());
      message.error(error.message);
    }
  }
  
  return (
    <>
    <Navbar/>
    <div className='h-screen d-flex justify-content-center align-items-center'>
        <div className='w-400 card p-3'>
        <h1 className="text-lg">Rail App - Login</h1>
        <hr />
            <Form layout='vertical' form={form} onFinish={onFinish}>
                <Form.Item label='Email' name='email'>
                    <input type="email"/>
                </Form.Item>
                <Form.Item label='Password' name='password'>
                    <input type="password" />
                </Form.Item>
                <div className="d-flex justify-content-between align-items-center my-3">
            <Link to="/register">Click Here To Register</Link>
            <button className='pri-btn' type="submit" >
              Login
            </button>
          </div>
            </Form>
        </div>
    </div>
    </>
  )
}

export default Login