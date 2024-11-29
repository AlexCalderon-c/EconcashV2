

import "../../static/manageUserStatic/cardItemStyle.css"
function CardItem({bill}) {

  return (
    <div className="bill-manager__container">
      <div className="bill-manager__container-content">
        <div className="bill-manager__container-money">{bill.value}</div>
        <div className="bill-manager__container-title">{bill.title}</div>
        <div className="bill-manager__container-desc">{bill.desc}</div>
      </div>
      <div className="bill-manager__container-date">
        <span className="bill-manager__container-date-content">
          {bill.date}
        </span>
        <div className="bill-manager__container-date-buttons">
          <button className="bill-manager__container-date-button button--modify">
            Modificar
          </button>
          <button className="bill-manager__container-date-button button--pay">
            Pagar
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
