import { useContext } from "react";
import CardItem from "./CardItem";
import { AppContext } from "../context/AppContext";
import "../../static/manageUserStatic/cardListStyle.css"

function CardList() {
  const { bills } = useContext(AppContext);

  if (bills === 0) {
    return <p>No hay facturas disponibles</p>;
  }

  return (
    <main className="bill-manager">      
        {bills.map((bill) => (
          <CardItem key={bill.id} bill={bill} />
        ))}
        <button className="bill-manager__add" >
            <p>AÑADIR GASTO +</p>
        </button>
    </main>
  );
}

export default CardList;
