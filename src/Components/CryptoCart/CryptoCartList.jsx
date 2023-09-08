import styles from './CryptoCart.module.css'
function CryptoCartList({ id, data, deleteFromCart }) {
  const { name, price, qty } = data;
  return (
    <div className={styles.cryptoCartListDiv}>
      <h3>Name:{name}</h3>
      <h3>Price:${price}</h3>
      <h3>Qty:{qty}</h3>
      <h3>Total Price:${qty * price}</h3>
      <button onClick={() => deleteFromCart(id)}>x</button>
    </div>
  );
}
export default CryptoCartList;
