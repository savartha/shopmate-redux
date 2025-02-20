import "./CartCard.css";
import Logo from '../assets/images/1001.png'
import { remove } from "../store/cartSlice";
import { useDispatch } from "react-redux";

export const CartCard = ({product}) => {
  const {name, price} = product;
  const dispatch = useDispatch();

  return (
      <div className="cartCard">
        <img src={Logo} alt={name} />
        <p className="productName">{name}</p>
        <p className="productPrice">${price}</p>
        <button onClick={()=>dispatch(remove(product))}>Remove</button>
      </div>
  )
}
