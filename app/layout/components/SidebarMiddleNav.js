import React from 'react'
import {SidebarMenu} from 'components'

import consultant from 'images/menuIcons/consultant.svg'
import customer from 'images/menuIcons/customer.svg'
import report from 'images/menuIcons/report.svg'
import product from 'images/menuIcons/product.svg'
import productConfig from 'images/menuIcons/productConfig.svg'
import order from 'images/menuIcons/order.svg'
import home from 'images/menuIcons/home.svg'
import userMng from 'images/menuIcons/userMng.svg'
import wallet from 'images/menuIcons/wallet.svg'
import tasting from 'images/menuIcons/tasting.svg'
import dollar from 'images/menuIcons/dollar.svg'
import consultantActive from 'images/menuIcons/consultantActive.svg'
import customerActive from 'images/menuIcons/customerActive.svg'
import homeActive from 'images/menuIcons/homeActive.svg'
import orderActive from 'images/menuIcons/orderActive.svg'
import productActive from 'images/menuIcons/productActive.svg'
import productConfAcvtive from 'images/menuIcons/productConfActive.svg'
import reportActive from 'images/menuIcons/reportActive.svg'
import userMngActive from 'images/menuIcons/userMngActive.svg'
import shippingfast from 'images/menuIcons/shippingfast.svg'
import shippingActive from 'images/menuIcons/shippingActive.svg'
import walletActive from 'images/menuIcons/walletActive.svg'
import tastingActive from 'images/menuIcons/tastingActive.svg'
import customerPortal from 'images/menuIcons/customerPortal.svg'
import customerPortalActive from 'images/menuIcons/customerPortalActive.svg'
import dollarActive from 'images/menuIcons/dollarActive.svg'
import ConsultantSidebar from './ConsultantSidebar'
import PropTypes from 'prop-types'
import CustomerSidebar from './CustomerSidebar'

export const Nav = ({portal}) => {
  if (portal == 2) {
    return <ConsultantSidebar />
  } else if (portal == 3) {
    return <CustomerSidebar />
  } else {
    return (
      <SidebarMenu className="">
        <SidebarMenu.Item
          icon={<img src={home} alt="" />}
          activeIcon={<img src={homeActive} alt="" />}
          title="Dashboards"
          to="/dashboards"
        />
        <SidebarMenu.Item
          icon={<img src={consultant} alt="" />}
          activeIcon={<img src={consultantActive} alt="" />}
          title="Consultant Center"
          to="/consultant-center"
        />
        <SidebarMenu.Item
          icon={<img src={customer} alt="" />}
          activeIcon={<img src={customerActive} alt="" />}
          title="Customer Center"
          to="/customer-center"
        />
        <SidebarMenu.Item
          icon={<img src={order} alt="" />}
          activeIcon={<img src={orderActive} alt="" />}
          title="Order Center"
          to="/order-center"
        />
        <SidebarMenu.Item
          icon={<img src={report} alt="" />}
          activeIcon={<img src={reportActive} alt="" />}
          title="Report Center"
          to="/reports/list-reports-view"
        />
        <SidebarMenu.Item
          icon={<img src={product} alt="" />}
          activeIcon={<img src={productActive} alt="" />}
          title="Product Center"
          to="/product-center"
        />
        {/* Product Configuration */}
        <SidebarMenu.Item
          icon={<img src={productConfig} alt="" />}
          activeIcon={<img src={productConfAcvtive} alt="" />}
          title="Product Configuration">
          <SidebarMenu.Item
            title="Product Display Categories"
            to="/products/display-category-manager"
            exact
          />
          <SidebarMenu.Item
            title="Product Classifications"
            to="/products/product-classification-manager"
            exact
          />
          <SidebarMenu.Item title="Product Types" to="/products/product-type-manager" exact />
          <SidebarMenu.Item title="Variation Types" to="/products/variation-type-setup" exact />
          <SidebarMenu.Item title="Join Options" to="/join/join-option-manager" exact />
          <SidebarMenu.Item title="Trigger Options" to="/rewards/trigger-option-manager" exact />
          <SidebarMenu.Item title="Gift Cards" to="/products/gift-card-manager" exact />
        </SidebarMenu.Item>
        <SidebarMenu.Item
          icon={<img src={dollar} alt="" />}
          activeIcon={<img src={dollarActive} alt="" />}
          title="Pricing & Discounts">
          <SidebarMenu.Item
            title="Price Rule Manager"
            to="/pricing-discount/price-rule-manager"
            exact
          />
          <SidebarMenu.Item
            title="Discount  Rule Manager"
            to="/pricing-discount/discount-rule-manager"
            exact
          />
          <SidebarMenu.Item title="Rewards Manager" to="/pricing-discount/rewards-manager" exact />
          <SidebarMenu.Item title="Price Simulator" to="/pricing-discount/price-simulator" exact />
        </SidebarMenu.Item>
        <SidebarMenu.Item
          icon={<img src={wallet} alt="" />}
          activeIcon={<img src={walletActive} alt="" />}
          title="Compensation">
          <SidebarMenu.Item title="Compensation Runs" to="/compensation/compensation-run" exact />
          <SidebarMenu.Item title="View Compensation" to="/compensation/view-compensation" exact />
          <SidebarMenu.Item
            title="Sky Wallet Payouts"
            to="/compensation/sky-wallet-payouts"
            exact
          />
        </SidebarMenu.Item>
        {/* <SidebarMenu.Item
          icon={<img src={tasting} alt="" />}
          activeIcon={<img src={tastingActive} alt="" />}
          title="Tastings"
          to="/tastings/new-order/checkout"
        /> */}
        <SidebarMenu.Item
          icon={<img src={userMng} alt="" />}
          activeIcon={<img src={userMngActive} alt="" />}
          title="Consultant Portal">
          <SidebarMenu.Item title="Announcement" to="/consultant-portal/announcement" exact />
          <SidebarMenu.Item title="Banner" to="/consultant-portal/banner" exact />
          <SidebarMenu.Item title="Resource" to="/consultant-portal/resource" exact />
        </SidebarMenu.Item>
        <SidebarMenu.Item
          icon={<img src={customerPortal} alt="" />}
          activeIcon={<img src={customerPortalActive} alt="" />}
          title="Customer Portal">
          <SidebarMenu.Item title="Announcement" to="/customer-portal/announcement" exact />
          <SidebarMenu.Item title="Banner" to="/customer-portal/banner" exact />
          <SidebarMenu.Item title="Resources" to="/customer-portal/resources" exact />
        </SidebarMenu.Item>
        <SidebarMenu.Item
          icon={<img src={shippingfast} alt="" />}
          activeIcon={<img src={shippingActive} alt="" />}
          title="Shipping">
          <SidebarMenu.Item title="Shipping Center" to="/shipping/shipping-center" exact />
          <SidebarMenu.Item
            title="New Shipping Run"
            to="/shipping/create-shipping-file-run"
            exact
          />
          <SidebarMenu.Item
            title="Shipping File Center"
            to="/shipping/shipping-file-center"
            exact
          />
          <SidebarMenu.Item
            title="Import Shipping File"
            to="/shipping/import-shipping-file"
            exact
          />
        </SidebarMenu.Item>
        <SidebarMenu.Item
          icon={<img src={userMng} alt="" />}
          activeIcon={<img src={userMngActive} alt="" />}
          title="User Management"
          to="/user-management"
        />
      </SidebarMenu>
    )
  }
}

Nav.propTypes = {
  portal: PropTypes.number,
}

export const SidebarMiddleNav = React.memo(Nav)
