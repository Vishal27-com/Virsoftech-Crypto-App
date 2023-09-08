import { createContext, useState } from "react";

const CryptoContext = createContext();

function CryptoContextProvider({ children }) {
  const [Cart, setCart] = useState([]);
  return (
    <CryptoContext.Provider value={{ Cart, setCart }}>
      {children}
    </CryptoContext.Provider>
  );
}
export { CryptoContext, CryptoContextProvider };
