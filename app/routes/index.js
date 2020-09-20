import React from 'react'
import {Switch, Redirect} from 'react-router'
import PrivateRoute from 'helpers/router/PrivateRoute'
import PublicRoute from 'helpers/router/PublicRoute'
// ----------- Pages Imports ---------------
import Dashboard from './Dashboard'
import ConsultantCenter from './ConsultantCenter'
import ConsultantCreate from './ConsultantCenter/ConsultantCreate'
import ConsultantNotes from './ConsultantCenter/ConsultantNotes'
import TastingTools from './Portals/Consultants/TastingTools/TastingTools'
import ConsultantPortal from './Portals/Consultants'
import TransSearchCriteria from './ConsultantCenter/ConsultantCreate/components/TransSearchCriteria'
import CustomerCenter from './CustomerCenter/index'
import CustomerCreate from './CustomerCenter/CustomerCreate'
import Product from './ProductCenter'
import ProductCreate from './ProductCenter/ProductCreate'
import Producter from './ProductCenter/Products'
import OrderCenter from './OrderCenter/index'
import CreateNewOrder from './OrderCenter/CreateNewOrder'
import Shopping from './OrderCenter/Shopping'
import ViewCart from './OrderCenter/ViewCart'
import CreatePerson from './OrderCenter/CreatePerson'
import PlaceOrder from './OrderCenter/PlaceOrder'
import SubTotal from './OrderCenter/Subtotal'
import Transactions from './OrderCenter/PlaceOrder/components/Transactions'
import NavbarOnly from './Layouts/NavbarOnly'
import SidebarWithNavbar from './Layouts/SidebarWithNavbar'
import Error404 from './Pages/Error404'
import ForgotPassword from './Pages/ForgotPassword'
import Login from './Pages/Login'
import Register from './Pages/Register'

// ----------- Layout Imports ---------------
import {SidebarWithNavbarNavbar} from 'layout/components/SidebarWithNavbarNavbar'
import DefaultSidebar from 'layout/components/DefaultSidebar'
import {SidebarANavbar} from 'layout/components/SidebarANavbar'
import {SidebarASidebar} from 'layout/components/SidebarASidebar'
import UserManagement from './UserManagement/UserManagement'
import CreateNewUserType from './UserManagement/CreateNewUserType'
import CreateNewUser from './UserManagement/CreateNewUser'
import ReportCenter from './ReportCenter'
import ViewReport from './ReportCenter/ViewReport'
import ConsultantSalesReport from './ReportCenter/ViewReport/ConsultantSalesReport'
import YtdEarnings from './ReportCenter/ViewReport/YtdEarningsReport'
import ProductCustomReports from './ReportCenter/ViewReport/ProductCustomReports'
import GiftCards from './ProductConfiguration/GiftCards'
import CreateGiftCard from './ProductConfiguration/GiftCards/components/CreateGiftCard'
import ProductTypeManager from './ProductConfiguration/ProductTypes'
import ProductClassificationManager from './ProductConfiguration/ProductClassifications'
import JoinOptionManager from './ProductConfiguration/JoinOptions'
import TriggerOptionManager from './ProductConfiguration/TriggerOptions'
import DisplayCategoryManager from './ProductConfiguration/DisplayCategories'
import AddDisplayCategory from './ProductConfiguration/DisplayCategories/components/AddDisplayCategory'
import AddNewClassification from './ProductConfiguration/ProductClassifications/components/AddNewClassification'
import AddJoinOption from './ProductConfiguration/JoinOptions/components/AddJoinOption'
import AddProductType from './ProductConfiguration/ProductTypes/components/AddProductType'
import VariationTypeSetup from './ProductConfiguration/VariationTypes'
import ExistingCheckout from './OrderCenter/ExistingCheckout'
import EditPersoninfo from './OrderCenter/PlaceOrder/components/ContactInfo'
import BillingInfo from './OrderCenter/PlaceOrder/components/BillingInfo'
import ShippingInfo from './OrderCenter/PlaceOrder/components/Shippinginfo'
import ShippingCenter from './Shipping/ShippingCenter/index'
import NewShippingRun from './Shipping/NewShippingRun/index'
import SearchCriteria from './Shipping/ShippingFileCenter/index'
import ImportShippingFile from './Shipping/ImportShippingFile'
import ProcessQueueManage from './Shipping/ShippingCenter/ProcessQueueManage'
import ShippingFileConfiguration from './Shipping/ShippingFileCenter/ShippingFileConfiguration/index'
import AddNewShippingFile from './Shipping/ShippingFileCenter/AddNewShipping'
import Translate from './CustomerCenter/Translate'
import VideosResults from './Apps/VideosResults'
import CompensationRuns from './Compensation/CompensationRuns'
import Tastings from './Tastings' //The tasting component still exists in the project.
import ViewCompensation from './Compensation/ViewCompensation'
import ProcessSkyWalletPayouts from './Compensation/ProcessSkyWalletPayouts'
import NewSkyWalletPayout from './Compensation/ProcessSkyWalletPayouts/NewSkyWalletPayout'
import Announcement from './CustomerPortal/Announcement/index'
import CreateAnnouncement from './CustomerPortal/Announcement/components/CreateAnnouncement'
import EditAnnouncement from './CustomerPortal/Announcement/components/EditAnnouncement'
import Banner from './CustomerPortal/Banner/index'
import AddNewBanner from './CustomerPortal/Banner/components/AddNewBanner'
import NewBanner from './ConsultantPortal/Banner/components/AddNewBanner'
import Resources from './CustomerPortal/Resources/index'
import EditResources from './CustomerPortal/Resources/components/EditResources'
import CreateResources from './CustomerPortal/Resources/components/CreateResources'
import EditBanner from './CustomerPortal/Banner/components/EditBanner'
import EditBanner1 from './ConsultantPortal/Banner/components/EditBanner'
import PriceRuleManager from './PricingDiscount/PriceRuleManager'
import RewardsManager from './PricingDiscount/RewardsManager'
import Announcements from './ConsultantPortal/Announcements/index'
import EditAnnouncements from './ConsultantPortal/Announcements/components/EditAnnouncements'
import CreateAnnouncements from './ConsultantPortal/Announcements/components/CreateAnnouncements'
import Banners from './ConsultantPortal/Banner/index'
import Resource from './ConsultantPortal/Resource/index'
import EditResource from './ConsultantPortal/Resource/components/EditResource'
import AddResource from './ConsultantPortal/Resource/components/AddNewResource'
import PriceSimulator from './PricingDiscount/PriceSimulator'
import DiscountRuleManager from './PricingDiscount/DiscountRuleManager'
import CouponsManager from './PricingDiscount/RewardsManager/components/CouponsManager'
import Autoresponders from './Communications/index'
import EditAutoresponders from './Communications/components/EditAutoresponders'
import TastingManager from './Tasting/index'
import CreateTasting from './Tasting/components/CreateTasting'
import ShippingAddresses from 'routes/Portals/Consultants/Profile/ShippingAddresses/'
import MyNotes from 'routes/Portals/Consultants/Profile/MyNotes'
import MySkyWallet from 'routes/Portals/Consultants/Profile/MySkyWallet/index'
import EditContactInfo from 'routes/Portals/Consultants/Profile/EditContactInfo/index'
import EditWebsiteProfile from 'routes/Portals/Consultants/Profile/EditWebsiteProfile/index'
import PaymentInformation from 'routes/Portals/Consultants/Profile/PaymentInformation/PaymentInformation'
import TeamCenter from './Team/TeamCenter/index'
import GraphicalDownline from './Team/GraphicalDownline/index'
import CustomerPortal from './Portals/Customers'
import ShippingAddress from './ShippingAddresses/index'
import MyProfile from './Portals/Customers/Profile/MyProfile/MyProfile'
import MyNote from './Portals/Customers/Profile/MyNotes/index'
import PaymentMethods from './PaymentMethods/index'
import MySkywallet from './MySkywallet/index'
import MyOrders from './Portals/Customers/MyOrders/index'
import MyMemberships from './Portals/Customers/MyMemberships/index'
import ReferredCustomerCenter from './Portals/Customers/ReferredCustomers/index'

//------ PrivateRoute Definitions --------
export const RoutedContent = () => {
  return (
    <Switch>
      <Redirect from="/" to="/login" exact />
      <PrivateRoute path="/compensation/compensation-run" exact component={CompensationRuns} />
      <PrivateRoute path="/dashboards" exact component={Dashboard} />
      <PrivateRoute path="/customer-center" exact component={CustomerCenter} />
      <PrivateRoute path="/customer-center/customer-create" exact component={CustomerCreate} />
      <PrivateRoute path="/customer-center/customer-edit" exact component={CustomerCreate} />
      <PrivateRoute path="/customer-center/customer-create/translate" exact component={Translate} />
      <PrivateRoute path="/customer-portal/announcement" exact component={Announcement} />
      <PrivateRoute
        path="/customer-portal/announcement/create-announcement"
        exact
        component={CreateAnnouncement}
      />
      <PrivateRoute
        path="/customer-portal/announcement/edit-announcement"
        exact
        component={EditAnnouncement}
      />
      <PrivateRoute path="/customer-portal/banner" exact component={Banner} />
      <PrivateRoute path="/customer-portal/resources" exact component={Resources} />
      <PrivateRoute
        path="/customer-portal/resources/edit-resources"
        exact
        component={EditResources}
      />
      <PrivateRoute
        path="/customer-portal/resources/create-resources"
        exact
        component={CreateResources}
      />
      <PrivateRoute path="/consultant-center" exact component={ConsultantCenter} />
      <PrivateRoute
        path="/consultant-center/consultant-create"
        exact
        component={ConsultantCreate}
      />
      <PrivateRoute
        path="/consultant-center/consultant-create/translate"
        exact
        component={TransSearchCriteria}
      />
      <PrivateRoute
        path="/consultant-center/consultant-create/consultant-notes"
        exact
        component={ConsultantNotes}
      />
      <PrivateRoute
        path="/shipping/import-shipping-file/import-configuration-edit"
        exact
        component={AddNewShippingFile}
      />
      <PrivateRoute path="/product-center" exact component={Product} />
      <PrivateRoute path="/product-center/product-create" exact component={ProductCreate} />
      <PrivateRoute path="/product-center/product-edit/:id" exact component={ProductCreate} />
      <PrivateRoute path="/product-center/product-create/products" exact component={Producter} />
      <PrivateRoute path="/consultant-portal/announcement" exact component={Announcements} />
      <PrivateRoute
        path="/consultant-portal/announcement/edit-announcement"
        exact
        component={EditAnnouncements}
      />
      <PrivateRoute
        path="/consultant-portal/announcement/create-announcement"
        exact
        component={CreateAnnouncements}
      />
      <PrivateRoute path="/consultant-portal/banner" exact component={Banners} />
      <PrivateRoute path="/consultant-portal/banner/display-banner-add" component={NewBanner} />
      <PrivateRoute path="/consultant-portal/banner/display-banner-edit" component={EditBanner1} />
      <PrivateRoute path="/consultant-portal/resource" exact component={Resource} />
      <PrivateRoute
        path="/consultant-portal/resource/display-resource-add"
        component={AddResource}
      />
      <PrivateRoute
        path="/consultant-portal/resource/display-resource-edit"
        component={EditResource}
      />
      <PrivateRoute path="/order-center" exact component={OrderCenter} />
      <PrivateRoute path="/order-center/create-new-order" exact component={CreateNewOrder} />
      <PrivateRoute path="/order-center/create-new-order/shopping" exact component={Shopping} />
      <PrivateRoute
        path="/order-center/create-new-order/shopping/viewcart"
        exact
        component={ViewCart}
      />
      <PrivateRoute
        path="/order-center/create-new-order/shopping/viewcart/createperson"
        exact
        component={CreatePerson}
      />
      <PrivateRoute
        path="/order-center/create-new-order/shopping/viewcart/createperson/placeorder"
        exact
        component={PlaceOrder}
      />
      <PrivateRoute
        path="/order-center/create-new-order/shopping/viewcart/createperson/placeorder/existingcheckout"
        exact
        component={ExistingCheckout}
      />
      <PrivateRoute
        path="/order-center/create-new-order/shopping/viewcart/createperson/placeorder/existingcheckout/editpersoninfo"
        exact
        component={EditPersoninfo}
      />
      <PrivateRoute
        path="/order-center/create-new-order/shopping/viewcart/createperson/placeorder/existingcheckout/editbillinginfo"
        exact
        component={BillingInfo}
      />
      <PrivateRoute
        path="/order-center/create-new-order/shopping/viewcart/createperson/placeorder/existingcheckout/editshippinginfo"
        exact
        component={ShippingInfo}
      />
      <PrivateRoute
        path="/order-center/create-new-order/shopping/viewcart/createperson/placeorder/subtotal"
        exact
        component={SubTotal}
      />
      <PrivateRoute
        path="/order-center/create-new-order/shopping/viewcart/createperson/placeorder/transactions"
        exact
        component={Transactions}
      />
      <PrivateRoute
        path="/order-center/create-new-order/shopping/viewcart/createperson/placeorder/subtotal/transactions"
        exact
        component={Transactions}
      />
      <PrivateRoute path="/user-management" exact component={UserManagement} />
      <PrivateRoute
        path="/user-management/create-new-usertype"
        exact
        component={CreateNewUserType}
      />
      <PrivateRoute
        path="/shipping/shipping-file-center/import-configration-manage"
        exact
        component={ShippingFileConfiguration}
      />
      <PrivateRoute path="/shipping-center/processing-queue" exact component={ProcessQueueManage} />
      <PrivateRoute path="/user-management/edit-usertype" exact component={CreateNewUserType} />
      <PrivateRoute path="/user-management/create-new-user" exact component={CreateNewUser} />
      <PrivateRoute path="/user-management/edit-user" exact component={CreateNewUser} />
      <PrivateRoute path="/banner/display-banner-add" component={AddNewBanner} />
      <PrivateRoute path="/banner/display-banner-edit" component={EditBanner} />
      <PrivateRoute path="/reports/list-reports-view" exact component={ReportCenter} />
      <PrivateRoute
        path="/reports/view-report/consultant-sales-report"
        exact
        component={ConsultantSalesReport}
      />
      <PrivateRoute path="/reports/view-report/ytd-earnings" exact component={YtdEarnings} />
      <PrivateRoute
        path="/reports/view-report/sales-tax-by-city"
        exact
        component={() => <ProductCustomReports report="city" />}
      />
      <PrivateRoute
        path="/reports/view-report/sales-tax-by-county"
        exact
        component={() => <ProductCustomReports report="county" />}
      />
      <PrivateRoute
        path="/reports/view-report/sales-tax-by-zip-code"
        exact
        component={() => <ProductCustomReports report="zipCode" />}
      />
      <PrivateRoute path="/reports/view-report/:report" component={ViewReport} />
      <PrivateRoute path="/products/gift-card-manager" component={GiftCards} />
      <PrivateRoute path="/products/gift-card-create" component={CreateGiftCard} />
      <PrivateRoute path="/products/product-type-manager" component={ProductTypeManager} />
      <PrivateRoute
        path="/products/product-classification-manager"
        component={ProductClassificationManager}
      />
      <PrivateRoute
        path="/consultant-portal/news-updates/pouring-public-events"
        component={() => {
          window.location.href =
            'https://scoutandcellar.app.box.com/s/stk7qce4oots93r1b108vc3w479d6hmp'
          return null
        }}
      />
      <PrivateRoute
        path="/consultant-portal/news-updates/field-communication"
        component={() => {
          window.location.href =
            'https://team-staging.scoutandcellar.com/Portal/Consultants/CustomContent/2268'
          return null
        }}
      />
      <PrivateRoute
        path="/consultant-portal/news-updates/sky-wallet-transfer"
        component={() => {
          window.location.href =
            'https://scoutandcellar.app.box.com/s/3dqk43669ywhkmg04j6mdcmvk4av18b2'
          return null
        }}
      />
      <PrivateRoute
        path="/consultant-portal/new-consultants/steps"
        component={() => {
          window.location.href = 'https://info.scoutandcellar.com/birthdaynewconsultantemail'
          return null
        }}
      />
      <PrivateRoute
        path="/consultant-portal/training-and-resources/scout-school-online"
        component={() => {
          window.location.href =
            'https://team-staging.scoutandcellar.com/Portal/Consultants/CustomContent/2255'
          return null
        }}
      />
      <PrivateRoute
        path="/consultant-portal/training-and-resources/webinar-training"
        component={() => {
          window.location.href =
            'https://team-staging.scoutandcellar.com/Portal/Consultants/CustomContent/2273'
          return null
        }}
      />
      <PrivateRoute
        path="/consultant-portal/training-and-resources/commit-success"
        component={() => {
          window.location.href =
            'https://scoutandcellar.app.box.com/s/336f6fmdzfaagkzt8vwujjkdcwh4w2oh'
          return null
        }}
      />
      <PrivateRoute
        path="/consultant-portal/training-and-resources/dough-crm"
        component={() => {
          window.location.href = 'https://doughcrm.com/'
          return null
        }}
      />
      <PrivateRoute
        path="/compensation/view-compensation"
        component={() => {
          window.location.href =
            'https://team-staging.scoutandcellar.com/Portal/Consultants/Compensation'
          return null
        }}
      />
      <PrivateRoute
        path="/compensation/view-earning"
        component={() => {
          window.location.href =
            'https://team-staging.scoutandcellar.com/Portal/Consultants/ViewEarnings'
          return null
        }}
      />
      <PrivateRoute
        path="/compensation/link-to-hyperwallet"
        component={() => {
          window.location.href =
            'https://scoutaccount.hyperwallet.com/hw2web/landing.xhtml?faces-redirect=true&refreshme=true'
          return null
        }}
      />
      <PrivateRoute
        path="/consultant-portal/compensation/compensation-plan-summary"
        component={() => {
          window.location.href =
            'https://scoutandcellar.app.box.com/s/0by42541xfwnwy11v3o7utfv769kuf1q'
          return null
        }}
      />
      <PrivateRoute
        path="/consultant-portal/compensation/compensation-plan"
        component={() => {
          window.location.href =
            'https://resources.scoutandcellar.com/sso-my-team-0-0-2-0-1-1-1-0-1-0-0'
          return null
        }}
      />
      <PrivateRoute
        path="/compensation/how-to-cash"
        component={() => {
          window.location.href =
            'https://team-staging.scoutandcellar.com/Portal/Consultants/CustomContent/2298'
          return null
        }}
      />
      <PrivateRoute
        path="/consultant-portal/community-building/opportunity-assets"
        component={() => {
          window.location.href =
            'https://scoutandcellar.app.box.com/s/vtfeub44jvkdymzhgck0wipd77rpqmk2'
          return null
        }}
      />
      <PrivateRoute
        path="/consultant-portal/community-building/fast-start-success"
        component={() => {
          window.location.href =
            'https://resources.scoutandcellar.com/sso-my-team-0-0-2-0-1-1-1-0-1-0-0-0-3'
          return null
        }}
      />
      <PrivateRoute
        path="/consultant-portal/reports/downlines"
        component={() => {
          window.location.href =
            'https://team-staging.scoutandcellar.com/Portal/Consultants/ViewReport#?source=/izenda/report/view/e008b997-9e65-42de-9d29-16ae8690acd9'
          return null
        }}
      />
      <PrivateRoute
        path="/consultant-portal/reports/downlines-history"
        component={() => {
          window.location.href =
            'https://team-staging.scoutandcellar.com/Portal/Consultants/ViewReport#?source=/izenda/report/view/1e7ce04d-bde2-4156-a07a-e08dacdf5725'
          return null
        }}
      />
      <PrivateRoute
        path="/consultant-portal/reports/orders"
        component={() => {
          window.location.href =
            'https://team-staging.scoutandcellar.com/Portal/Consultants/ViewReport#?source=/izenda/report/view/7b92d04b-a153-48b4-9b51-429af2eec9c7'
          return null
        }}
      />
      <PrivateRoute
        path="/consultant-portal/reports/customer-sales"
        component={() => {
          window.location.href =
            'https://team-staging.scoutandcellar.com/Portal/Consultants/ViewReport#?source=/izenda/report/view/40c5e4f3-c3d9-41ac-9a02-2b96498a5b91'
          return null
        }}
      />
      <PrivateRoute
        path="/consultant-portal/reports/inventory"
        component={() => {
          window.location.href =
            'https://team-staging.scoutandcellar.com/Portal/Consultants/ViewReport#?source=/izenda/report/view/4f3c9611-76ca-4d16-877d-c319d816d176'
          return null
        }}
      />
      <PrivateRoute
        path="/consultant-portal/reports/consultants-close-to-newgenq"
        component={() => {
          window.location.href =
            'https://team-staging.scoutandcellar.com/Portal/Consultants/ViewReport#?source=/izenda/report/view/6490ebdb-1b0d-42ce-aad8-d414f633f681'
          return null
        }}
      />
      <PrivateRoute
        path="/consultant-portal/reports/newgenq"
        component={() => {
          window.location.href =
            'https://team-staging.scoutandcellar.com/Portal/Consultants/ViewReport#?source=/izenda/report/view/95a030c3-203f-4daf-8256-f1e24e5f292d'
          return null
        }}
      />
      <PrivateRoute
        path="/consultant-portal/reports/cellar-star-recognition-program"
        component={() => {
          window.location.href =
            'https://resources.scoutandcellar.com/sso-my-team-0-0-2-0-1-1-1-0-1-0-0-1'
          return null
        }}
      />
      <PrivateRoute
        path="/consultant-portal/business-files/policies-procedures"
        component={() => {
          window.location.href =
            'https://scoutandcellar.app.box.com/s/pu1454qvxagypf5mm8va9g8ga973huud'
          return null
        }}
      />
      <PrivateRoute
        path="/consultant-portal/business-files/personal-website-renewals"
        component={() => {
          window.location.href =
            'https://scoutandcellar.app.box.com/s/1ogv7uawenprpxycexk25bpqrgmioo0w'
          return null
        }}
      />
      <PrivateRoute
        path="/consultant-portal/business-files/w9-form"
        component={() => {
          window.location.href = 'https://www.dropbox.com/s/nq7num01pphar6z/W9.pdf?dl=0'
          return null
        }}
      />
      <PrivateRoute
        path="/consultant-portal/business-files/business-entity-registration-form"
        component={() => {
          window.location.href =
            'https://www.dropbox.com/s/wpbjjglbwsdr2lu/Business%20Entity%20Registration%20Form%20Temp.pdf?dl=0'
          return null
        }}
      />
      <PrivateRoute
        path="/consultant-portal/business-files/terms-of-use"
        component={() => {
          window.location.href =
            'https://scoutandcellar.app.box.com/s/yq1rs8997etwwp1wrqgkkknij30ac9x6'
          return null
        }}
      />
      <PrivateRoute
        path="/consultant-portal/business-files/wine-law-faqs"
        component={() => {
          window.location.href =
            'https://scoutandcellar.app.box.com/s/7w17g8n2mag31d7ud2odayre2jymae0i'
          return null
        }}
      />
      <PrivateRoute
        path="/consultant-portal/business-files/current-shipping-rates"
        component={() => {
          window.location.href = 'https://resources.scoutandcellar.com/scoutsafeship'
          return null
        }}
      />
      <PrivateRoute
        path="/consultant-portal/business-files/consultant-agreement"
        component={() => {
          window.location.href =
            'https://scoutandcellar.app.box.com/s/ehvzuz9m0r6s49v4ifxa3j7n20ytvnyi'
          return null
        }}
      />
      <PrivateRoute
        path="/consultant-portal/events-calendar"
        component={() => {
          window.location.href =
            'https://team-staging.scoutandcellar.com/Portal/Events/EventsCalendar'
          return null
        }}
      />
      <PrivateRoute
        path="/consultant-portal/brand-marketing/brand-guidelines"
        component={() => {
          window.location.href =
            'https://scoutandcellar.app.box.com/s/nuiox705kxn05od9npc9o8lwf22hguvc'
          return null
        }}
      />
      <PrivateRoute
        path="/consultant-portal/brand-marketing/submit-ticket-brand"
        component={() => {
          window.location.href =
            'https://fieldwatch.co/api/v1/clients/158/reported_incidents/new?field_submission_id=449&token=2366501ec70dea06e3b887bb3a403391'
          return null
        }}
      />
      <PrivateRoute
        path="/consultant-portal/brand-marketing/wine-consultant-logo"
        component={() => {
          window.location.href =
            'https://scoutandcellar.app.box.com/s/zqz0pyomgmjjs1lazz6tt3gat9nvvh7h'
          return null
        }}
      />
      <PrivateRoute
        path="/consultant-portal/brand-marketing/social-media-assets/facebook-cover-photos/facebook-cover-photo1"
        component={() => {
          window.location.href =
            'https://scoutandcellar.app.box.com/s/3iwmj6mgcfd1ed3ip6pbe0vpclcqyllf'
          return null
        }}
      />
      <PrivateRoute
        path="/consultant-portal/brand-marketing/social-media-assets/facebook-cover-photos/facebook-cover-photo2"
        component={() => {
          window.location.href =
            'https://scoutandcellar.app.box.com/s/c444krqb59llwd9ubwpe90eulccl7bl5'
          return null
        }}
      />
      <PrivateRoute
        path="/consultant-portal/brand-marketing/social-media-assets/facebook-cover-photos/facebook-cover-photo3"
        component={() => {
          window.location.href =
            'https://scoutandcellar.app.box.com/s/rtuv2eei2vfsjq7si5p6ma0oarffsucw'
          return null
        }}
      />
      <PrivateRoute
        path="/consultant-portal/brand-marketing/social-media-assets/social-media-badges"
        component={() => {
          window.location.href =
            'https://scoutandcellar.app.box.com/s/la0vhzw4f07tvyc6owtk1z6vs6ufqpo4'
          return null
        }}
      />
      <PrivateRoute
        path="/consultant-portal/brand-marketing/social-media-assets/social-media-badges/career-title-badges/social-badges"
        component={() => {
          window.location.href =
            'https://scoutandcellar.app.box.com/s/drkv8zyjmk9bpsa1fuxbwghfaotetncj'
          return null
        }}
      />
      <PrivateRoute
        path="/consultant-portal/brand-marketing/approved-fonts/noto-serif"
        component={() => {
          window.location.href = 'https://fonts.google.com/specimen/Noto+Serif+TC'
          return null
        }}
      />
      <PrivateRoute
        path="/consultant-portal/brand-marketing/approved-fonts/oswald"
        component={() => {
          window.location.href =
            'https://scoutandcellar.app.box.com/s/rtuv2eei2vfsjq7si5p6ma0oarffsucw'
          return null
        }}
      />
      <PrivateRoute
        path="/consultant-portal/brand-marketing/infographics/brand-card"
        component={() => {
          window.location.href =
            'https://scoutandcellar.app.box.com/s/ywmaatkv7u5up8jc4cx17bmrg3fke2ab'
          return null
        }}
      />
      <PrivateRoute
        path="/consultant-portal/brand-marketing/fedEx-office-print-center/really-your-wine"
        component={() => {
          window.location.href =
            'https://scoutandcellar.app.box.com/s/uqq896itaehoinvsyofj7oebxxpjrvm9'
          return null
        }}
      />
      <PrivateRoute
        path="/consultant-portal/brand-marketing/consultants-by-state-map"
        component={() => {
          window.location.href =
            'https://scoutandcellar.app.box.com/s/5coxdxfcf8zh2dpipvmormho4sin40kh'
          return null
        }}
      />
      <PrivateRoute
        path="/consultant-portal/brand-marketing/clean-crafted-infographic"
        component={() => {
          window.location.href =
            'https://scoutandcellar.app.box.com/s/hwfttj7q5gs0k1v0p27q7n4o2ovce0pa'
          return null
        }}
      />
      <PrivateRoute
        path="/consultant-portal/brand-marketing/clean-crafted-by-numbers"
        component={() => {
          window.location.href =
            'https://scoutandcellar.app.box.com/s/ljjgptsbdmxrrzvetkgouuz7kzf09r8l'
          return null
        }}
      />
      <PrivateRoute
        path="/consultant-portal/brand-marketing/blog-buttons"
        component={() => {
          window.location.href =
            'https://scoutandcellar.app.box.com/s/3717sva85v9og94nsglcwj5qy84km1qf'
          return null
        }}
      />
      <PrivateRoute
        path="/consultant-portal/brand-marketing/do-the-right"
        component={() => {
          window.location.href =
            'https://scoutandcellar.app.box.com/s/p2n1j6p5gebodvd4sg4zfpljluo8kp7q'
          return null
        }}
      />
      <PrivateRoute
        path="/consultant-portal/the-wine/wine-style-description"
        component={() => {
          window.location.href =
            'https://scoutandcellar.app.box.com/s/hfrfjda387bj3qacrrukhtru569v838k'
          return null
        }}
      />
      <PrivateRoute
        path="/consultant-portal/the-wine/wine-wellness-faqs"
        component={() => {
          window.location.href = 'https://resources.scoutandcellar.com/sso-my-team-0-0-0-0-0-1-0-3'
          return null
        }}
      />
      <PrivateRoute
        path="/consultant-portal/the-wine/wine-classification-chart"
        component={() => {
          window.location.href =
            'https://scoutandcellar.app.box.com/s/iq24at760dzcg0i845la063b6cntemo2'
          return null
        }}
      />
      <PrivateRoute
        path="/consultant-portal/the-wine/glossary-wine-words"
        component={() => {
          window.location.href =
            'https://scoutandcellar.app.box.com/s/y2ccf8t1kv31lembsehxcjsfnsvv04pl'
          return null
        }}
      />
      <PrivateRoute
        path="/consultant-portal/the-wine/videos-wine-tasting"
        component={() => {
          window.location.href = 'https://vimeo.com/showcase/5203739'
          return null
        }}
      />
      <PrivateRoute
        path="/consultant-portal/reports/cellar-star-recognition-program"
        component={() => {
          window.location.href = 'https://printonline.fedex.com/v3.8.0_s8/scoutandcellar/'
          return null
        }}
      />
      <PrivateRoute
        path="/consultant-portal/brand-marketing/fedEx-office-print-center"
        component={() => {
          window.location.href = 'https://www.fedex.com/en-us/printing/no-flash-polc.html'
          return null
        }}
      />
      <PrivateRoute
        path="/consultant-portal/the-wine/scout-circle-faqs"
        component={() => {
          window.location.href =
            'https://resources.scoutandcellar.com/sso-my-team-0-0-2-0-1-1-1-0-1-1'
          return null
        }}
      />
      <PrivateRoute
        path="/consultant-portal/the-wine/scout-circle-assets"
        component={() => {
          window.location.href =
            'https://scoutandcellar.app.box.com/s/9vck7mj8p1m0u66waf5bwp186msw50pq'
          return null
        }}
      />
      <PrivateRoute
        path="/consultant-portal/broadcast-messages"
        component={() => {
          window.location.href =
            'https://team-staging.scoutandcellar.com/Portal/Consultants/BroadcastMessageManager'
          return null
        }}
      />
      <PrivateRoute
        path="/customer-portal/shop"
        component={() => {
          window.location.href = 'https://scoutandcellar.com/wine/'
          return null
        }}
      />
      <PrivateRoute
        path="/shipping/shipping-file-center/import-configration-manage/import-configuration-edit"
        exact
        component={AddNewShippingFile}
      />
      <PrivateRoute path="/shipping/shipping-file-center" exact component={SearchCriteria} />
      <PrivateRoute path="/join/join-option-manager" component={JoinOptionManager} />
      <PrivateRoute path="/rewards/trigger-option-manager" component={TriggerOptionManager} />
      <PrivateRoute path="/products/display-category-manager" component={DisplayCategoryManager} />
      <PrivateRoute path="/products/display-category-edit" component={AddDisplayCategory} exact />
      <PrivateRoute
        path="/products/display-category-edit/:id"
        component={AddDisplayCategory}
        exact
      />
      <PrivateRoute path="/join/join-option-edit" component={AddJoinOption} exact />
      <PrivateRoute path="/join/join-option-edit/:id" component={AddJoinOption} exact />
      <PrivateRoute
        path="/products/display-classification-edit"
        exact
        component={AddNewClassification}
      />
      <PrivateRoute
        path="/products/display-classification-edit/:id"
        exact
        component={AddNewClassification}
      />
      <PrivateRoute path="/products/product-type-edit" component={AddProductType} exact />
      <PrivateRoute path="/products/product-type-edit/:id" component={AddProductType} exact />
      <PrivateRoute path="/products/variation-type-setup" component={VariationTypeSetup} />
      <PrivateRoute path="/shipping/shipping-center" component={ShippingCenter} />
      <PrivateRoute path="/shipping/create-shipping-file-run" component={NewShippingRun} />
      <PrivateRoute path="/shipping/import-shipping-file" component={ImportShippingFile} />
      <PrivateRoute path="/compensation/view-compensation" exact component={ViewCompensation} />
      <PrivateRoute
        path="/compensation/sky-wallet-payouts"
        exact
        component={ProcessSkyWalletPayouts}
      />
      <PrivateRoute
        path="/compensation/sky-wallet-payouts/new-sky-wallet-payout-method"
        exact
        component={NewSkyWalletPayout}
      />
      <PrivateRoute
        path="/pricing-discount/price-rule-manager"
        exact
        component={PriceRuleManager}
      />
      <PrivateRoute path="/pricing-discount/rewards-manager" exact component={RewardsManager} />
      <PrivateRoute path="/pricing-discount/price-simulator" exact component={PriceSimulator} />
      <PrivateRoute
        path="/pricing-discount/discount-rule-manager"
        exact
        component={DiscountRuleManager}
      />
      <PrivateRoute
        path="/pricing-discount/rewards-manager/coupons-manager"
        exact
        component={CouponsManager}
      />
      <PrivateRoute path="/team/teamcenter" exact component={TeamCenter} />
      <PrivateRoute path="/team/graphicaldownline" exact component={GraphicalDownline} />
      <PrivateRoute path="/communications/autoresponders" exact component={Autoresponders} />
      <PrivateRoute
        path="/communications/autoresponders/edit-autoresponders"
        exact
        component={EditAutoresponders}
      />
      <PrivateRoute
        path="/consultant-portal/tasting/tasting-manager/create-tasting"
        exact
        component={CreateTasting}
      />
      <PrivateRoute
        path="/consultant-portal/tasting/tasting-manager"
        exact
        component={TastingManager}
      />
      {/* Profile Routes */}
      <PrivateRoute component={VideosResults} path="/Videos/Vimeo" />
      {/* Portals Routes */}
      <PrivateRoute component={ConsultantPortal} exact path="/consultant-portal" />
      <PrivateRoute component={TastingTools} path="/consultant-portal/tasting/tasting-tools" />
      <PrivateRoute
        path="/consultant-portal/shipping-addresses"
        exact
        component={ShippingAddresses}
      />
      <PrivateRoute path="/consultant-portal/notes" exact component={MyNotes} />
      <PrivateRoute path="/consultant-portal/edit-contact-info" exact component={EditContactInfo} />
      <PrivateRoute path="/consultant-portal/manage-sky-wallet" exact component={MySkyWallet} />
      <PrivateRoute path="/consultant-portal/notes" exact component={MyNotes} />
      <PrivateRoute path="/consultant-portal/edit-profile" exact component={EditWebsiteProfile} />
      <PrivateRoute
        path="/consultant-portal/payment-information"
        exact
        component={PaymentInformation}
      />
      <PrivateRoute path="/customer-portal/shipping_addresses" exact component={ShippingAddress} />
      <PrivateRoute path="/customer-portal/payment-methods" exact component={PaymentMethods} />
      <PrivateRoute path="/customer-portal/my-sky-wallet" exact component={MySkywallet} />
      {/* Customer-Portal Routes */}
      <PrivateRoute path="/customer-portal" exact component={CustomerPortal} />
      <PrivateRoute path="/customer-portal/my-profile" exact component={MyProfile} />
      <PrivateRoute path="/customer-portal/my-notes" exact component={MyNote} />
      <PrivateRoute path="/customer-portal/my-orders" exact component={MyOrders} />
      <PrivateRoute path="/customer-portal/my-memberships" exact component={MyMemberships} />
      <PrivateRoute
        path="/customer-portal/referred-customer-center"
        exact
        component={ReferredCustomerCenter}
      />
      {/*    Pages Routes    */}
      <PrivateRoute component={Error404} path="/pages/error-404" />
      <PublicRoute component={ForgotPassword} path="/pages/forgot-password" />
      <PublicRoute component={Login} path="/login" />
      <PublicRoute component={Register} path="/pages/register" />
      {/*    404    */}
      <Redirect to="/pages/error-404" />
    </Switch>
  )
}
//------ Custom Layout Parts --------
export const RoutedNavbars = () => (
  <Switch>
    {/* Other Navbars: */}
    <PrivateRoute component={SidebarANavbar} path="/layouts/sidebar-a" />
    <PrivateRoute component={NavbarOnly.Navbar} path="/layouts/navbar" />
    <PrivateRoute component={SidebarWithNavbar.Navbar} path="/layouts/sidebar-with-navbar" />
    <PrivateRoute component={SidebarWithNavbarNavbar} />
  </Switch>
)
export const RoutedSidebars = () => (
  <Switch>
    {/* Other Sidebars: */}
    <PrivateRoute component={SidebarASidebar} path="/layouts/sidebar-a" />
    <PrivateRoute component={SidebarWithNavbar.Sidebar} path="/layouts/sidebar-with-navbar" />
    {/* Default Sidebar: */}
    <PrivateRoute component={DefaultSidebar} />
  </Switch>
)
