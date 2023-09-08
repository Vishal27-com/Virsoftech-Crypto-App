import { useContext, useState } from "react";
import { CryptoContext } from "../../Context/CryptoContext";
import styles from './CryptoCard.module.css';
function CryptoCard({name,price}){
  const [qty,setQty]=useState(0);
  const {Cart,setCart}=useContext(CryptoContext)
  const [showQty,setShowQty]=useState(false)
  const addToCart=()=>{
    if(qty>0){
     let crypto={name,price,qty};
     setCart([...Cart,crypto]);
     setShowQty(false)
    }
    else alert('Please Enter Qty')
  }
  return (
    <div className={styles.cardDiv}>
      <h3>Name:{name}</h3>
      <h3>Price:${price}</h3>
      {
      !showQty?<button onClick={()=>setShowQty(true)}>Qty</button>:
      <input type="number" onChange={(e)=>setQty(+e.target.value)}/>
      }
      <button className={styles.addCartBut} onClick={addToCart}>Buy</button>
    </div>
  )
}
export default CryptoCard;