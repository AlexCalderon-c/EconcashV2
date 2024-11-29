import React from 'react'
import "../../static/manageUserStatic/bannerBillingStyle.css"

function BannerBilling() {
  return (
    <div className="banner-section">
            <div className="banner-section__button">
                <button className="bill-account__add" >
                    <p>+</p>
                </button>
            </div>
            <div className="banner-section__info">
                <span className="banner-section__account">
                    Haga click en el botón para ingresar saldo
                </span>
                <span className="banner-section__desc">
                    TU SALDO DISPONIBLE
                </span>
            </div>
            
        </div>
  )
}

export default BannerBilling