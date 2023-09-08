import CryptoCard from '../CryptoCard/CryptoCard';
import styles from './CryptoList.module.css'
const cryptoData = [
  { name: 'Bitcoin', price: 40000 },
  { name: 'Ethereum', price: 2800 },
  { name: 'Litecoin', price: 150 },
];
function CryptoList() {
  return (
    <div className={styles.cryptoListDiv}>
      <h1>----Crypto Section----</h1>
      {cryptoData.map((item) => (
        <CryptoCard key={item.name} name={item.name} price={item.price} />
      ))}
    </div>
  );
}
export default CryptoList
