import { useContext } from "react";
import { CryptoContext } from "../../Context/CryptoContext";
import CryptoCartList from "./CryptoCartList";
import styles from './CryptoCart.module.css'
function CryptoCart(){
  const {Cart,setCart}=useContext(CryptoContext)
  const deleteFromCart=(id)=>{
    setCart(Cart.filter((item,ind)=>ind!==id))
  }
    return (
    <div className={styles.cryptoCartDiv}>
      <h1>----Cart Section----</h1>
      <h2>Total Amt.-${Cart.reduce((ac,el)=>{return ac+(el.price*el.qty)},0)}</h2>
    {
      Cart.length===0?
      <h3>Your Cart is Empty.</h3>:
     Cart.map((item,ind)=>
     <CryptoCartList 
      key={ind}
      id={ind}
      data={item} 
      deleteFromCart={deleteFromCart}/>
     )
  
    }
    </div>
  )
}
export default CryptoCart;