
import { CartCard } from '../components/CartCard'
import { useTitle } from '../hooks/useTitle'
import { useSelector } from "react-redux";

export const Cart = () => {
    useTitle('Shopping Cart - Cart')
    const products = useSelector(state => state.cartState.cartList)     ;   
    const totalAmount = useSelector(state=>state.cartState.total)             
  return (
    <main>
    <section className="products">
      <div>Cart Items/Total: {products.length}/{totalAmount}</div>
      { products.map((product) => (
        <CartCard key={product.id} product={product} />
      )) }        
    </section>
  </main>
  )
}
