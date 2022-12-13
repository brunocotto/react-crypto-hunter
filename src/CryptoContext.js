import React, { createContext, useContext, useEffect, useState } from "react";

//o conext permite que os componentes passem informações profundamente sem passar as props explicitamente
const Crypto = createContext();

const CryptoContext = ({ children }) => {
  //hooks para extrair a lógica de estado de um componente
  const [currency, setCurrency] = useState("BRL");
  const [symbol, setSymbol] = useState("R$");

  useEffect(() => {
    if (currency === "BRL") setSymbol("R$");
    else if (currency === "USD") setSymbol("$");
    //observo currency, quando alterado, executa o useEffect
  }, [currency]);

  return (
    //retorno um provider com o valor 
    <Crypto.Provider value={{ currency, setCurrency, symbol }}>
      {children}
    </Crypto.Provider>
  );
};
export default CryptoContext;

//exporto os estados para utilizar no restante da aplicação
export const CryptoState = () => {
  return useContext(Crypto);
};
