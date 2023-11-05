
import React, { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Shop = ({backet, SetBacket}) => {
    const notify = () => toast.dark("User remove");
    const [liked, setLiked] = useState(false);
    const toggleLiked = () => {
        setLiked(!liked);
      };

      const removeFromBasket = (id) => {
        SetBacket(backet.filter(item => item.id !== id));
        notify()
    };
  return (
    <div>
 
     
    {
        backet.map(item=>{
            return(
                <>
                
                <div className='SHopCard'>
        <div className='shopFlex'>
                <img className='ShopImg' src="https://img.freepik.com/premium-vector/accoun-vector-icon-with-long-shadow-white-illustration-isolated-blue-round-background-graphic-web-design_549897-771.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699056000&semt=ais" alt="" />
                <h2>{item.name} {item.lastname}</h2>
          
        </div>
        <div className="flextwo">
        <h4>{item.email}</h4>
        <button onClick={()=>removeFromBasket(item.id)} className='btn btn-danger'><RestoreFromTrashIcon/></button>
        <ToastContainer/>
        </div>
      
    </div></>
            )
        })
    }
    


    </div>     
  )
}

export default Shop
