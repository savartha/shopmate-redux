import React, { useEffect, useState } from 'react'
import Logo from '../assets/images/1001.png'
import { add,remove } from '../store/cartSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

import  './ProductCard.css'

export const ProductCard = ({product}) => {
  const cartList = useSelector(state => state.cartState.cartList)
  const dispatch = useDispatch();
  const [isInList,setIsInList] = useState(false);
  useEffect(()=>{
    const isInCartList = cartList.find(item=>item.id===product.id)
    if(isInCartList){
      setIsInList(true);
    }else{
      setIsInList(false)
    }
  },[cartList,product.id])
  return (
    <div className='productCard'>
        <img src={Logo} alt={product.name}/>
        <p className='name'>{product.name}</p>
        <div className="action">
            <p>${product.price}</p>
            {isInList ? <button onClick={()=> dispatch(remove(product))}>Remove</button>:<button onClick={()=> dispatch(add(product))}>Add To Cart</button>}
            
      </div>
    </div>
  )
}
