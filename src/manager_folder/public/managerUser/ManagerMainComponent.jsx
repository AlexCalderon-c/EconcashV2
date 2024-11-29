import React from 'react'
import HeaderNav from './HeaderNav'
import BannerBilling from './BannerBilling'
import CardList from './CardList'
import "../../static/manageUserStatic/headerStyle.css"


function ManagerMainComponent() {
  return (
    <header className='header__section'>
        <HeaderNav/>
        <BannerBilling/>
        <CardList/>
    </header>
  )
}

export default ManagerMainComponent