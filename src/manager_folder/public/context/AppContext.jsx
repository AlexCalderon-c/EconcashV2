import { createContext, useEffect, useState } from "react";
import { bills } from "../../data/bills";

export const AppContext = createContext();

export function AppContextProvider(props) {
  const [billsList, setBillsList] = useState([]);

  useEffect(() => {
    setBillsList(bills);
  }, []);

  const addBill = (title, desc, value, date) => {
    setBillsList([
      ...billsList,
      {
        id: billsList.length + 1,
        title,
        desc,
        value,
        date,
      },
    ]);
  };

  const deleteBill = (id) => {
    setBillsList(billsList.filter((bill) => bill.id !== id));
  };

  return (
    <AppContext.Provider
      value={{
        bills,
        addBill,
        deleteBill,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContext;
