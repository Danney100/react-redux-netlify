import React from 'react'
import {SidebarMenu} from 'components'

import profile from 'images/menuIcons/profile.svg'
import profileActive from 'images/menuIcons/profileActive.svg'
import order from 'images/menuIcons/order.svg'
import orderActive from 'images/menuIcons/orderActive.svg'
import events from 'images/menuIcons/events.svg'
import eventsActive from 'images/menuIcons/eventsActive.svg'

const CustomerSidebar = () => {
  return (
    <SidebarMenu className="">
      <SidebarMenu.Item
        icon={<img src={order} alt="" />}
        activeIcon={<img src={orderActive} alt="" />}
        title="Shop"
        to="/customer-portal/shop"
      />
      <SidebarMenu.Item
        icon={<img src={profile} alt="" />}
        activeIcon={<img src={profileActive} alt="" />}
        title="Profile">
        <SidebarMenu.Item title="My Profile" to="/customer-portal/my-profile" exact />
        <SidebarMenu.Item title="My Notes" to="/customer-portal/my-notes" exact />
      </SidebarMenu.Item>
      <SidebarMenu.Item
        icon={<img src={events} alt="" />}
        activeIcon={<img src={eventsActive} alt="" />}
        title="Shipping Addresses"
        to="/customer-portal/shipping_addresses"
      />
      <SidebarMenu.Item
        icon={<img src={profile} alt="" />}
        activeIcon={<img src={profileActive} alt="" />}
        title="Payment Methods"
        to="/customer-portal/payment-methods"
      />
      <SidebarMenu.Item
        icon={<img src={order} alt="" />}
        activeIcon={<img src={orderActive} alt="" />}
        title="My Orders"
        to="/customer-portal/my-orders"
      />
      <SidebarMenu.Item
        icon={<img src={profile} alt="" />}
        activeIcon={<img src={profileActive} alt="" />}
        title="My Memberships"
        to="/customer-portal/my-memberships"
      />
      <SidebarMenu.Item
        icon={<img src={profile} alt="" />}
        activeIcon={<img src={profileActive} alt="" />}
        title="My Sky Wallet"
        to="/customer-portal/my-sky-wallet"
      />
      <SidebarMenu.Item
        icon={<img src={profile} alt="" />}
        activeIcon={<img src={profileActive} alt="" />}
        title="Referred Customer Center"
        to="/customer-portal/referred-customer-center"
      />
    </SidebarMenu>
  )
}

export default CustomerSidebar
