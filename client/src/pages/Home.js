import { Form, InputNumber, message } from 'antd'
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar';
import { useDispatch } from 'react-redux';
import { HideLoading, ShowLoading } from '../redux/alertsSlice';
import axios from 'axios';

const Home = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const user = localStorage.getItem('token');
    useEffect(()=>{
      if (localStorage.getItem('token') === null) {
        window.location.reload();
      }
    })
    const onFinish = async(values)=>{
      console.log(values);
      try{
        dispatch(ShowLoading());
      const response = await axios.post('http://localhost:8000/api/seats/book-seats',values);
      // console.log(response.data)
      dispatch(HideLoading());
      if(response.data.success)
      {
        message.success(response.data.message);
        navigate('/seats')
      }else{
        message.error({content:"Seats not available or Something went wrong"});
        navigate('/')
      }
      }catch(error){
        message.error(error.message);
      }
        
    }
  return (
    <>
    <Navbar/>
    <div className='h-screen d-flex justify-content-center align-items-center flex-column'>
      <div><Link to='/seats'>Click here to See seat Layout</Link></div>
    <div className='w-400 card p-3'>
    <h1 className="text-lg">Booking - AP Express on 15-Jan-2023</h1>
    <hr />
        <Form layout='vertical' form={form} onFinish={onFinish}>
            <Form.Item label='Seats' name='seatsbooked'>
                <InputNumber min={1} max={7}  type="number"/>
            </Form.Item>
            <div className="d-flex justify-content-between align-items-center my-3">
        <button className='pri-btn' type="submit" >
          Book
        </button>
      </div>
        </Form>
    </div>
</div>
    </>
  )
}

export default Home
