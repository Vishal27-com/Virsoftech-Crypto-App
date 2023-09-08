import CryptoCart from "./Components/CryptoCart/CryptoCart";
import CryptoList from "./Components/CryptoList/CryptoList";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <CryptoList />
      <CryptoCart />
    </div>
  );
}