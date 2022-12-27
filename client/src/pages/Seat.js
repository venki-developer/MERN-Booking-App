import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import '../resources/navbar.css';
import '../resources/global.css'
import axios from 'axios'
// import SeatLayout from '../components/SeatLayout';
import '../resources/seats.css'
const Seat = () => {
  const [seatData, setSeatData] = useState([]);
  const getSeatData = async () => {
    const response = await axios.get('http://localhost:8000/api/seats');
    console.log(response);
    setSeatData(response.data.data);
  }
  useEffect(() => {
    getSeatData();
    seatData.forEach(seat => {
      const seatElement = document.querySelector(`#seat-${seat.seatNumber}`);
      if(seat.seatNumber<=80){
        if (seat.available) {
          seatElement.classList.add('available');
        } else {
          seatElement.classList.add('unavailable');
        }
      }
    });
  }, [seatData])
  return (
    <>
      <Navbar />
      <div id="seats-layout" className='h-screen d-flex justify-content-center align-items-center flex-column'>
        <div><h3 className='text-center my-2'>Seat Layout</h3></div>
        <div>
        <table id="seat-layout" className='text-center'>
          <tr>
            <td id="seat-1" className="seat">1</td>
            <td id="seat-2" className="seat">2</td>
            <td id="seat-3" className="seat">3</td>
            <td className='border-0' style={{ width: '30px', height: '30px' }}></td>
            <td id="seat-4" className="seat">4</td>
            <td id="seat-5" className="seat">5</td>
            <td id="seat-6" className="seat">6</td>
            <td id="seat-7" className="seat">7</td>
          </tr>
          <tr>
            <td id="seat-14" className="seat">14</td>
            <td id="seat-13" className="seat">13</td>
            <td id="seat-12" className="seat">12</td>
            <td className='border-0' style={{ width: '30px', height: '30px' }}></td>
            <td id="seat-11" className="seat">11</td>
            <td id="seat-10" className="seat">10</td>
            <td id="seat-9" className="seat">9</td>
            <td id="seat-8" className="seat">8</td>
          </tr>
          <tr>
            <td id="seat-15" className="seat">15</td>
            <td id="seat-16" className="seat">16</td>
            <td id="seat-17" className="seat">17</td>
            <td className='border-0' style={{ width: '30px', height: '30px' }}></td>
            <td id="seat-18" className="seat">18</td>
            <td id="seat-19" className="seat">19</td>
            <td id="seat-20" className="seat">20</td>
            <td id="seat-21" className="seat">21</td>
          </tr>
          <tr>
            <td id="seat-28" className="seat">28</td>
            <td id="seat-27" className="seat">27</td>
            <td id="seat-26" className="seat">26</td>
            <td className='border-0' style={{ width: '30px', height: '30px' }}></td>
            <td id="seat-25" className="seat">25</td>
            <td id="seat-24" className="seat">24</td>
            <td id="seat-23" className="seat">23</td>
            <td id="seat-22" className="seat">22</td>
          </tr>
          <tr>
            <td id="seat-29" className="seat">29</td>
            <td id="seat-30" className="seat">30</td>
            <td id="seat-31" className="seat">31</td>
            <td className='border-0' style={{ width: '30px', height: '30px' }}></td>
            <td id="seat-32" className="seat">32</td>
            <td id="seat-33" className="seat">33</td>
            <td id="seat-34" className="seat">34</td>
            <td id="seat-35" className="seat">35</td>
          </tr>
          <tr>
            <td id="seat-42" className="seat">42</td>
            <td id="seat-41" className="seat">41</td>
            <td id="seat-40" className="seat">40</td>
            <td className='border-0' style={{ width: '30px', height: '30px' }}></td>
            <td id="seat-39" className="seat">39</td>
            <td id="seat-38" className="seat">38</td>
            <td id="seat-37" className="seat">37</td>
            <td id="seat-36" className="seat">36</td>
          </tr>
          <tr>
            <td id="seat-43" className="seat">43</td>
            <td id="seat-44" className="seat">44</td>
            <td id="seat-45" className="seat">45</td>
            <td className='border-0' style={{ width: '30px', height: '30px' }}></td>
            <td id="seat-46" className="seat">46</td>
            <td id="seat-47" className="seat">47</td>
            <td id="seat-48" className="seat">48</td>
            <td id="seat-49" className="seat">49</td>
          </tr>
          <tr>
            <td id="seat-56" className="seat">56</td>
            <td id="seat-55" className="seat">55</td>
            <td id="seat-54" className="seat">54</td>
            <td className='border-0' style={{ width: '30px', height: '30px' }}></td>
            <td id="seat-53" className="seat">53</td>
            <td id="seat-52" className="seat">52</td>
            <td id="seat-51" className="seat">51</td>
            <td id="seat-50" className="seat">50</td>
          </tr>
          <tr>
            <td id="seat-57" className="seat">57</td>
            <td id="seat-58" className="seat">58</td>
            <td id="seat-59" className="seat">59</td>
            <td className='border-0' style={{ width: '30px', height: '30px' }}></td>
            <td id="seat-60" className="seat">60</td>
            <td id="seat-61" className="seat">61</td>
            <td id="seat-62" className="seat">62</td>
            <td id="seat-63" className="seat">63</td>
          </tr>
          <tr>
            <td id="seat-70" className="seat">70</td>
            <td id="seat-69" className="seat">69</td>
            <td id="seat-68" className="seat">68</td>
            <td className='border-0' style={{ width: '30px', height: '30px' }}></td>
            <td id="seat-67" className="seat">67</td>
            <td id="seat-66" className="seat">66</td>
            <td id="seat-65" className="seat">65</td>
            <td id="seat-64" className="seat">64</td>
          </tr>
          <tr>
            <td id="seat-71" className="seat">71</td>
            <td id="seat-72" className="seat">72</td>
            <td id="seat-73" className="seat">73</td>
            <td className='border-0' style={{ width: '30px', height: '30px' }}></td>
            <td id="seat-74" className="seat">74</td>
            <td id="seat-75" className="seat">75</td>
            <td id="seat-76" className="seat">76</td>
            <td id="seat-77" className="seat">77</td>
          </tr>
          <tr>
            <td id="seat-80" className="seat">80</td>
            <td className="seat bg-white">X</td>
            <td className="seat bg-white">X</td>
            <td className='border-0' style={{ width: '30px', height: '30px' }}></td>
            <td className="seat bg-white">X</td>
            <td className="seat bg-white">X</td>
            <td id="seat-79" className="seat">79</td>
            <td id="seat-78" className="seat">78</td>
          </tr>
          <caption className='text-center' style={{captionSide:'bottom'}}>Green: Available Red:Unavailable </caption>
        </table>
        </div>

      </div>
    </>
  )
}

export default Seat