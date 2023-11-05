import React from 'react'
import { useState } from 'react'
import fetchAPI from '../Usefetch/fetchAPI'
import '../App.css'
import { Card, Row, Col } from 'react-bootstrap';
import '../App.css'
import Searchmodal from '../component/searchmodal';
import Backet from '../component/backet';
import RadioGroupRating from '../component/client';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Home = () => {
     
  const notify = () => toast("User Go");

  const [backet , SetBacket] = useState([])
  const GoToBacket = (item)=>{
    SetBacket((prev)=>{
        return [...prev , item]
    })
    notify()
  }

    const url =  "http://localhost:2000/alldata"
    const {data:products, ispending, error} = fetchAPI(url)

  
  
  return (
<>
<div className="box">
{
    products&&products.map(item=>{
        return(
        <>
            <div className='Card'>
            <div className="flex">
            <div>
            <i>username</i><h4>{item.username}</h4>
            </div>
            <div>
            <img src="https://img.freepik.com/premium-vector/accoun-vector-icon-with-long-shadow-white-illustration-isolated-blue-round-background-graphic-web-design_549897-771.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699056000&semt=ais" alt="" />
            </div>
            </div>
            <div className="flexone">Fullname:
            <div><p>{item.name}</p></div>
            <div><p>{item.lastname}</p></div>
            </div>
            <div className="flextwo">
            <div><p className='UserEmail'>{item.email}</p></div>
            <div><button className='btn btn-primary' onClick={()=>GoToBacket(item)}>Go</button>
            <ToastContainer/></div>
           
           </div>
           <RadioGroupRating/>
           </div>
           
        </>
        )
    })
}
</div>

<Backet backet={backet} SetBacket={SetBacket}/>


</>
  )
}

export default Home
